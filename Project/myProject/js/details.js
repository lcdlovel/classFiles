/**
 * Created by web-01 on 2017/9/20.
 */
$("#header").load("myProject/data/head-foot/header.php");
$("#footer").load("myProject/data/head-foot/footer.php");


/*****************放大镜部分***********************/
(()=>{
    $md=$("[data-fiter=md]");
    $fiter=$("[data-fiter=fiter]");
    $mirror=$("[data-fiter=mirror]");
    $lg=$("[data-fiter=lg]");
    const sizeX=parseFloat($fiter.css("width")),
            sizeY=parseFloat($fiter.css("height")),
            maxX=parseFloat($mirror.css("width"))-sizeX,
            maxY=parseFloat($mirror.css("height"))-sizeY+30;
    console.log(maxY);
    $md.hover(()=>{
        $fiter.toggle();
        $lg.toggle();
    });
    $mirror.mousemove((e)=>{
        var left=e.offsetX-sizeX/2,
            top=(e.offsetY+30)-sizeY/2;
        if(top<0)top=31;
        else if(top>maxY)top=maxY;
        if(left<0)left=0;
        else if(left>maxX)left=maxX;
        console.log(top);
        $fiter.css({"top":top,
                    "left":left});
        $lg.css("backgroundPosition",`-${left*16/7}px -${top*16/7}px `);
    })
})();
