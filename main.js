$('button').on('click', async function (event) {
    event.preventDefault();
    $('#main-texto').css("display", "none");
    let valueData = $('#date').val();
    let url = `https://api.nasa.gov/planetary/apod?api_key=QRaDd5HWwVtjNo83M6DhwSdhxw9M2Ibxj798RL5w&date=${valueData}`;
    let apiResponse = await fetch(url).then(response => response.json());
    $('body').css("background-image", `url(${apiResponse.url})`);
    $('body').css("background-repeat", "no-repeat");
    $('body').css("background-size", "cover");
    $('#corpo').css('display', 'block');
    $('#titulo').html(`${apiResponse.title}`);
    $('#texto').html(`(${apiResponse.explanation})`);

    console.log(event)
    console.log(apiResponse)
    console.log(inputDate)
});