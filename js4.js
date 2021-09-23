var versObjektum = [
    {
        cim: "A Hegyi Zsupsz",
        szerzo:"Keresztesi János",
        vers: "A Hegyi Zsupsz egy nagy kövér<br>nehézkes léptű, lomha lény,<br>és lenn a völgyben él szegény.<br><br>A hegyre nem megy föl soha.<br>A Kőszáli Puff rokona.<br>",
        kep: 'kepek/hegyizsupsz.PNG'
        },

        {
            cim: "Lusták dala",
            szerzo:"Tóth Krisztina",
            vers: "Gyere lusta, feküdj mellém,<br>kezdjünk együtt lustálkodni,<br>és csak lógjunk itt egész nap,<br>mint kötélen fél pár zokni!<br><br>Gyere, bújj be mellém, lusta,<br>mondjuk el, mit nem csinálunk!<br>Most arról készüljön lista,<br>mi minden nem lesz ma nálunk!<br><br>Ez a lusták napja, vagy mi,<br>átalusszuk az egészet,<br>tessék minket békén hagyni,<br>ágyba kérjük az ebédet!<br>",
            kep: 'kepek/lustakdala.jpg'
        }

];



$(function(){

  

    for (let index = 0; index < versObjektum.length; index++) {
        $("#2 h3").eq(index).html(versObjektum[0].cim);
        $("#2 p").eq(index).html(versObjektum[0].szerzo);
        $("#2 p").eq(0).html(versObjektum[index].vers);
        $("#1 img").eq(index).attr("src",versObjektum[0].kep);}
    
        for (let index = 0; index < versObjektum.length; index++) {
            $("#4 h3").eq(index).html(versObjektum[1].cim);
            $("#4 p").eq(index).html(versObjektum[1].szerzo);
            $("#4 p").eq(1).html(versObjektum[index].vers);
            $("#3 img").eq(index).attr("src",versObjektum[1].kep);
        };
        
    



});