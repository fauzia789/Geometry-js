// 




function calculateButtonArea(){
    const bContent =document.getElementById('b-content');
    const bcontentValue =bContent.value;
    const bContentType = parseFloat(bcontentValue);
    console.log(bContentType);

    const hContent =document.getElementById('h-content');
    const hcontentValue = hContent.value;
    const hContentType = parseFloat(hcontentValue);
    console.log(hContentType);

    const area = 0.5 *bContentType * hContentType;
    console.log('Area of the triangle:' , area);

    const areaTriangleValue = document.getElementById('area-triangle');
    areaTriangleValue.innerText = area;
    
}


function calculateButtonArea2(){
    const wContent =document.getElementById('wcontemt');
    const wcontemtValue = wContent.value;
    const wcontemtType = parseFloat(wcontemtValue);
    console.log(wcontemtType);

    const lContent =document.getElementById('lcontent');
    const lContentValue =lContent.value;
    const lcontentType =parseFloat(lContentValue);
    console.log(lcontentType);

    const massure = wcontemtType*lcontentType;
    console.log('Area of rectangle:' , massure);

    const areaRectangleValue = document.getElementById('area2');
    areaRectangleValue.innerText= massure;
}
function calculateButtonArea3(){
    const b2Content =document.getElementById('b2contemt');
    const b2ContentValue = b2Content.value;
    const b2ContentType = parseFloat(b2ContentValue);
    console.log(b2ContentType);

    const h2Content =document.getElementById('h2content');
    const h2ContentValue =h2Content.value;
    const h2contentType =parseFloat(h2ContentValue);
    console.log(h2contentType);

    const massure2 = b2ContentType*h2contentType;
    console.log('Area of rectangle:' , massure2);

    const areaparralaleValue = document.getElementById('area3');
  areaparralaleValue.innerText= massure2;
}
function calculateButtonArea4(){
    const b3Content =document.getElementById('b3contemt');
    const b3ContentValue = b3Content.value;
    const b3ContentType = parseFloat(b3ContentValue);
    console.log(b3ContentType);

    const h3Content =document.getElementById('h3content');
    const h3ContentValue =h3Content.value;
    const h3contentType =parseFloat(h3ContentValue);
    console.log(h3contentType);

    const massure3 = b3ContentType*h3contentType;
    console.log('Area of rectangle:' , massure3);

    const areaparralaleValue = document.getElementById('area4');
  areaparralaleValue.innerText= massure3;
}
function calculateButtonArea5(){
    const b4Content =document.getElementById('b4contemt');
    const b4ContentValue = b4Content.value;
    const b4ContentType = parseFloat(b4ContentValue);
    console.log(b4ContentType);

    const h4Content =document.getElementById('h4content');
    const h4ContentValue =h4Content.value;
    const h4contentType =parseFloat(h4ContentValue);
    console.log(h4contentType);

    const massure4 = b4ContentType*h4contentType;
    console.log('Area of rectangle:' , massure4);

    const areaparralaleValue = document.getElementById('area5');
  areaparralaleValue.innerText= massure4;
}
function calculateButtonArea6(){
    const aContent =document.getElementById('acontemt');
    const aContentValue = aContent.value;
    const aContentType = parseFloat(aContentValue);
    console.log(aContentType);

    const cContent =document.getElementById('ccontent');
    const cContentValue =cContent.value;
    const ccontentType =parseFloat(cContentValue);
    console.log(ccontentType);

    const massure5 = aContentType*ccontentType;
    console.log('Area of rectangle:' , massure5);

    const areaparralaleValue = document.getElementById('area6');
  areaparralaleValue.innerText= massure5;
}