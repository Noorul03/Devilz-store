function myFunction(x) {
  x.classList.toggle("change");
}

// function myFunction() {
//   document.getElementById("sidenav").style.width = "250px";
// }

// nav end


// sliding imgs
var imgs=["pisg.jpg","macg.jpg","snig.jpg"]
  a=0
  document.getElementById('ig345').src=imgs[a]
  function ab(){
    a+=1
    document.getElementById('ig345').src=imgs[a]
    if(a==2){
      a=-1

    }
  }
  setInterval(ab,3000)
// slide end

// most wanted jquery
$(document).ready(function()
{
  $('.mwp').mouseenter(function()
    {
    $('.mwp1').toggle('.mwp1')
  })
  $('.mwp').mouseleave(function()
    {
    $('.mwp1').toggle('.mwp1')
  })
})



$(document).ready(function()
{
  $('.mws').mouseenter(function()
    {
    $('.mws1').toggle('.mws1')
  })
  $('.mws').mouseleave(function()
    {
    $('.mws1').toggle('.mws1')
  })
})

$(document).ready(function()
{
  $('.mwsht').mouseenter(function()
    {
    $('.mwsht1').toggle('.mwsht1')
  })
  $('.mwsht').mouseleave(function()
    {
    $('.mwsht1').toggle('.mwsht1')
  })
})

$(document).ready(function()
{
  $('.mwg').mouseenter(function()
    {
    $('.mwg1').toggle('.mwg1')
  })
  $('.mwg').mouseleave(function()
  {
  $('.mwg1').toggle('.mwg1')
})
})

$(document).ready(function()
{
  $('.mwp2').mouseenter(function()
    {
    $('.mwp21').toggle('.mwp21')
  })
  $('.mwp2').mouseleave(function()
    {
    $('.mwp21').toggle('.mwp21')
  })
})

$(document).ready(function()
{
  $('.mwk').mouseenter(function()
    {
    $('.mwk1').toggle('.mwk1')
  })
  $('.mwk').mouseleave(function()
    {
    $('.mwk1').toggle('.mwk1')
  })
})

$(document).ready(function()
{
  $('.mwsc').mouseenter(function()
    {
    $('.mwsc1').toggle('.mwsc1')
  })
  $('.mwsc').mouseleave(function()
    {
    $('.mwsc1').toggle('.mwsc1')
  })
})
//  most wanted end 

// training
$(document).ready(function()
{
  $('#m41').show()
  $('#m42').hide()
  $('#m41').mouseenter(function()
    {
      $('.m411').hide()
      $('.m421').hide()
      $('#m42').show()
  })
  $('#m41').mouseleave(function()
    {
      $('.m411').show()
      $('.m421').show()
      $('#m42').hide()
  })
})

$(document).ready(function()
{
  $('#m41').show()
  $('#m42').hide()
  $('#m41').mouseenter(function()
    {
      $('.m411').hide()
      $('.m421').hide()
      $('#m43').show()
  })
  $('#m41').mouseleave(function()
    {
      $('.m411').show()
      $('.m421').show()
      $('#m43').hide()
  })
})