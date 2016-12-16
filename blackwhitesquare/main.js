$(document).ready(function() {
    // 初始化自动函数，分数
    var autoMove,
        score=0;

    // 初始化 最高分数
    var lastMaxScore = localStorage.getItem('scoreMax')? localStorage.getItem('scoreMax') : 0;
    var scoreMax = $('#scoreMax');
    scoreMax.text('分数：' + lastMaxScore);


    var scoreView = $('#scoreView');
    var MakeBlackWhite = {
        createRow: function() {
            // 创建四行白块
            var row = ['white', 'white', 'white', 'white'];
            // 随机选定其中一个为黑块
            var digit = Math.floor(Math.random()*row.length);
            row[digit] = 'white black';
            // 根据row创建一行方块
            var rows = $('<div>');
            rows.attr('class', 'rows');
            for(var i=0; i<row.length;i++) {
                var div = $('<div>');
                div.attr('class', row[i]);
                div.on('click', MakeBlackWhite.clickBlackSquare);
                div.appendTo(rows);
            }
            return rows;
        },
        // 移动行为
        move: function(elm ,speed) {
            // 定义要移动的elm，速度
            autoMove =  setTimeout(function() {
                // 判断this.elm的top
                var top = $(elm).css('top');
                top = parseInt(top) + 20;

                /* if(top === 0) {
                 *   // 判断是否pass
                 *   // 这里会有一个return 如果是-1 则游戏结束
                 *   var returnNum = judge();
                 *   if(returmNum === -1) {
                 *     // 游戏结束
                 *   }
                 * }
                 */
                if(top === 0) {
                    // 当top为0自动生成方块到最上层
                    var rows = MakeBlackWhite.createRow();
                    MakeBlackWhite.insert($('#gamePanel'), rows);
                    top = -100 + 'px';
                    $(elm).css({
                        "top": top
                    })
                }

                // 获取最后gamePanel里最后一组rows的黑方块的top
                // 如果大于gamePanel的高度 ＋ 本身的高度 － 10
                // 说明没有点击 那么 －10分
                // 删除当千行
                var lastBlackTop = $(elm).children(':last').find('.black')[0];  // 这里的find返回的是一个数组，好像冒泡了一次，0是当前的blackdiv，1是父节点
                if(lastBlackTop.offsetTop > (parseInt($(elm).css('height')) + parseInt(lastBlackTop.offsetHeight))) {
                    score -= 10;
                    lastBlackTop.parentNode.parentNode.removeChild(lastBlackTop.parentNode);
                }

                $(elm).css({
                    "top": top
                })

                // 分数显示
                // 这一个其实可以单独提取出来，创建一个自动删除的函数，每当执行自动删除最后一行的时候再来算分数
                scoreView.text('分数：' + score);
                autoMove = setTimeout(arguments.callee, speed);
            }, speed);
        },
        insert: function($where, elm) {
            // 添加到游戏面板
            $where.prepend(elm);
        },
        clickBlackSquare: function(elm) {
            /* 点击之后首先判断当前元素是否在底部
             * 然后判断当前点击的元素是不是黑块
             * 如果是则分数＋20
             * 删除当前行
             * 当分数 > 30 的时候 下落速度 -10
             */
            var target = elm.target;
            elm.stopPropagation();
            var elmTargetTop = target.offsetTop;
            if(elmTargetTop > parseInt($('#gamePanel').css('height')) - 20){
                if(target.className.indexOf('black') !== -1) {
                    target.parentNode.parentNode.removeChild(target.parentNode);
                    score+=20;
                }else {
                    MakeBlackWhite.gameFail();
                }
            }
        },
        gameFail: function() {
            /* 点到白块游戏失败
             * 弹出游戏失败
             * 暂停automove
             * 判断当前分数是否大于最高分数
             * 分数清零
             * 按钮改为开始状态 设置状态值
             */
            alert('game over');
            clearTimeout(autoMove);
            score > lastMaxScore? localStorage.setItem('scoreMax', score) : console.log(score)
            score = 0;
            startButton.text('开始');
            startButton.val('0');
        }
    }

    /* control */
    var startButton = $('#startButton');
    startButton.on('click', function() {
      switch (startButton.val()) {
          case '0' :
              // 初始 清除游戏面板内所有的rows
              $('#gamePanel').children().remove();
              // 然后新建rows添加到游戏面板 开启autoMove
              var rows = MakeBlackWhite.createRow();
              MakeBlackWhite.insert($('#gamePanel'), rows);

              MakeBlackWhite.move($('#gamePanel'), 80);
              startButton.text('暂停').val('2');
              break;
          case '1' :
              MakeBlackWhite.move($('#gamePanel'), 80);
              startButton.text('暂停').val('2');
              break;
          case '2' :
              clearTimeout(autoMove);
              startButton.text('开始').val('1');
              break;
          default :
              console.log('error');
              break;
      }

    })
});

/*
 *  流程 ==>
 *          创建行白块 在其中随机生成一个为黑块 每一个添加点击事件判断点击是否为黑块进行删除或游戏结束
 *          自动下落 在初始时将下落板块向上移100px留出空位 因为一行白块的高度是100px 所以下落板块top为0时一行白块在游戏板块第一行显示出来 当下落板块为0时 在下落板块新添加一行到最前面 然后下落板块再次回到－100px状态
 *          判断是否点击黑块 最底层行top大于游戏板块高度的top减去行白块的高度时，说明最底层行处于游戏板块的底层 这个时候行块处于可点击状态 通过点击来判断
 *          判断是否miss 当最底层行top大于游戏板块高度的时候 说明最底层行已经在游戏板块外 玩家并没有点击到黑块来删除他 所以进行扣分 然后删除该行
 *          初始化分数，自动下落，控制面板
 */