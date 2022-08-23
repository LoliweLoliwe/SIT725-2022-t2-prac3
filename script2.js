const cardList = [
  {
      title: "Mjita 2",
      image: "haircut.jpg",
      link: "About transformation",
      desciption: "Demo desciption about a man having a haircut"
  },
  {
      title: "Sir",
      image: "after.jpg",
      link: "About a man afterwards",
      desciption: "Demo desciption of a man in a suit"
  }
]
const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!")
}

const addCards = (items) => {
  items.forEach(item => {
      let itemToAppend = '<div class="col s4 center-align">'+
  '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
  '</div><div class="card-content">'+
  '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
  '<div class="card-reveal">'+
      '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
      '<p class="card-text">'+item.desciption+'</p>'+
    '</div></div></div>';
    $("#card-section").append(itemToAppend)
  });
}

$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('#clickMeButton').click(()=>{
      clickMe();
  })
  addCards(cardList);
});
