/*
combined files : 

test-charset-gbk2gbk/mods/mod1
test-charset-gbk2gbk/mods/mod2
test-charset-gbk2gbk/init

*/
/**
 * mod1
 * @author: daxingplay<daxingplay@gmail.com>
 * @date: 12-8-28
 * @requires: kissy 1.2+
 */
KISSY.add('test-charset-gbk2gbk/mods/mod1',function (S) {

    return {
        init:function () {
            S.log('����GBK�ļ�����ã����磡');
        }
    }
});/**
 * mod2
 * @author: daxingplay<daxingplay@gmail.com>
 * @date: 12-8-28
 * @requires: kissy 1.2+
 */
KISSY.add('test-charset-gbk2gbk/mods/mod2',function (S) {

    return {
        init:function () {
            S.log('[mod2] hello, world. This is file is GBK.')
        }
    }
});/**
 * init
 * @author: daxingplay<daxingplay@gmail.com>
 * @date: 12-8-28
 * @requires: kissy 1.2+
 */
KISSY.add('test-charset-gbk2gbk/init',function (S) {

    S.ready(function(){
        for(var i=1; i<args.length; i++){
            try{
                args[i].init && args[i].init();
            }catch(e){
                S.log(e, 'dir');
            }
        }
        S.log('������������say hello���㿴����������GBK���ļ�Ŷ��');
    });

}, {
    requires: [
        './mods/mod1',
        './mods/mod2'
    ]
});