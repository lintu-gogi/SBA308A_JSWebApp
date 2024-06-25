// The breed selection input element.
const breedSelect = document.getElementById('breedSelect');

// Storing the API key here for reference and easy access.
const API_KEY = 'live_A77lKFuzZrWTLli2d9J5SCMpuX0YD56lmQpyAk7IrG4pu7re49nRFlL1sPVA9sg6';
/*
 Create an async function "initialLoad" that does the following:
  Retrieve a list of breeds from the cat API using fetch().
  Create new <options> for each of these breeds.
 */
document.addEventListener("DOMContentLoaded", initialLoad);
async function initialLoad(){
    {
      try{
      const option=document.createElement("option");
      option.textContent="Select a breed"
      breedSelect.appendChild(option);
      const response = await fetch("https://api.thecatapi.com/v1/breeds",{
        method:'GET',
        headers: {
           'x-api-key' : API_KEY } 
      
        });
      const jsonData = await response.json();
      console.log(jsonData);
      for(let i=0;i<5;i++){
        const cardItem = document.querySelector('#card_id');
      const cardDiv = document.createElement('div');
      cardDiv.className = 'card' ;
      cardDiv.style.width=18;
      const img = document.createElement('img');
        img.src = jsonData[i].image['url'];;
        img.className = 'card-img-top';
        img.alt = `Image${i}`;

        cardDiv.appendChild(img);
        cardItem.appendChild(cardDiv);
        //ca.src= jsonData[i].image['url'];
        //parag.textContent= jsonData[i].description;
      }
      jsonData.forEach(element => {
        console.log(element.name+" "+element.id);
        console.log("Description: "+element.description);
        //console.log(element.image['url']);
        const option=document.createElement("option");
        option.value=element.id;
        option.textContent=element.name;
        breedSelect.appendChild(option);
        
        
      });
    }
    catch(error)
    {
        console.log(error);
    }
 }
    
}
  
/*
   Create an event handler for breedSelect that does the following:
   Retrieve information on the selected breed from the cat API using fetch().  
 */
breedSelect.addEventListener("change",selectFunction);
async function selectFunction(){
     console.log("One value Selected");
      // Get the selected option
      const selectedOption = breedSelect.options[breedSelect.selectedIndex];
       
      // Get the text of the selected option
      const selectedName = selectedOption.text;
      // Get the Id of the selected option
      const selectedBreedId=selectedOption.value;
      console.log("Name= "+selectedName+" Id= "+selectedBreedId);
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=15&breed_ids=${selectedBreedId}`,{
       method:'GET',
       headers: {
          'x-api-key' : API_KEY } 
     
       });
     const jsonData = await response.json();
     console.log("Json Data");
     console.log(jsonData);
     let infoData=selectedName;
     console.log(infoData);
     jsonData.forEach((element,index)=>{
      let ele=element;
      let url=ele.url;
      let id=ele.id;
      console.log(url);
      const carouselInner = document.querySelector('.carousel-inner');
      const carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
      const img = document.createElement('img');
        img.src = url;
        img.className = 'd-block w-100';
        img.alt = `Slide ${index + 1}`;

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
     });


     
 }
     