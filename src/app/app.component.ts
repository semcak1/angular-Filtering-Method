import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  products=[
    {
      id:1,
      name:'Television',
     category:'Elektronik',
     price:'300'     
    },
    {
      id:2,
      name:'Iphone 6s',
      category:'Telephone',
      price:'600'
    },
    {
      id:3,
      name:'samsung 6s',
      category:'Telephone',
      price:'700'
    },
   {
     id:4,
      name:'Masa takımı',
      category:'Mobilya',
      price:'740'
    }
  ]
  
  
  matchedArr=this.products;
 

filterProducts(value){
  this.matchedArr=[]; 
  this.products.forEach(product=>
   {     
     const productArr=Object.values(product)
     const productStr=productArr.join('').toLocaleLowerCase()  
     const isLetterMatched=productStr.includes(value)    

    if(isLetterMatched){      
      this.matchedArr.push(product)
    }
   }

  )
   
}  
  
}
