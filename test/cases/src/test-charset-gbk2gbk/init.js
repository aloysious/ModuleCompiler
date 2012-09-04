/**
 * init
 * @author: daxingplay<daxingplay@gmail.com>
 * @date: 12-8-28
 * @requires: kissy 1.2+
 */
KISSY.add(function (S) {

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