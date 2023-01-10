
function abbrevName(name) {
    const mots = name.split(' ');
    
    const Initial = mots[0];
    const Initial2 = mots[mots.length - 1][0];
    
   
    return `${Initial} ${Initial2}.`;
}
  

console.log(abbrevName("Dian Michelle"));
  