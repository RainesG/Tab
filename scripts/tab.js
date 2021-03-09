        function gett() {
            var v = document.getElementsByTagName('input')[0].value;
            Tab('tab', 'content', v);
        }

        // tabName:按钮容器class名     cttName:内容容器class名
        function Tab(tabName, cttName, img) {
            // 获取对象
            console.log(tabName, cttName, img);
            var tab = document.getElementsByClassName(tabName)[0];
            var content = document.getElementsByClassName(cttName)[0];
            var tabLi = tab.getElementsByTagName('li')
            var cttLi = content.getElementsByTagName('li')

            // 显示函数
            function show() {
                for (let index = 0; index < cttLi.length; index++) {
                    cttLi[index].style.opacity = '0'
                    // cttLi[index].style.display = 'none'
                }
                var n = this.dataset.id;
                // cttLi[n].style.display = 'block'
                cttLi[n].style.opacity = '1'
            }

            // 赋值并添加点击事件
            for (let index = 0; index < tabLi.length; index++) {
                var o = index + 1
                cttLi[index].style.opacity = '0'
                // cttLi[index].style.display = 'none'
                cttLi[index].innerHTML = '<img src="./images/' + img + o + '.jpg">'
                // console.log('img'+Tab.img);
                // console.log('get:'+ get());
                tabLi[index].onclick = show;
                tabLi[index].dataset.id = index;
                cttLi[index].dataset.id = index;
            }
        }

        // Tab(按钮容器class名,内容容器class名)


        var btn = document.getElementsByTagName('button')[0]
        btn.onclick = gett;