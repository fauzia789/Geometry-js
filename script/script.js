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
    areaRectangleValue.innerText=massure;
}