import { Package } from './package'



export const PACKAGES: Package[] = [
    {
        code: "WILSON01",
        name: "Forfait Couette et café",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.",
        startdate: "01/10/2022",
        enddate:"30/04/2022",
        price: 260,
        lodging:{name: "Manoir le Wilson", description:"Hôtel & Spa", address:"3208 rue Principale", city:"Sainte-Ferdinette", postalcode:"G0M 1N0", phonenumber:"1 800-842-1021", email:"info@manoirlewilson.com", website:"https://www.manoirlewilson"},
        categories: ["Hébergement" , "Restauration"],
        rank: "Basique",
        reviews: []
    },

    {
        code: "WILSON02",
        name: "Forfait Nuitées Double",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.",
        startdate: "01/10/2022",
        enddate:"30/04/2022",
        price: 460,
        lodging:{name: "Manoir le Wilson", description:"Hôtel & Spa", address:"3208 rue Principale", city:"Sainte-Ferdinette", postalcode:"G0M 1N0", phonenumber:"1 800-842-1021", email:"info@manoirlewilson.com", website:"https://www.manoirlewilson"},
        categories: ["Hébergement" , "Restauration"],
        rank:"Standard",
        reviews: [
            {
                rating: 6,
                comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                rating: 6,
                comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }
        ]
    },

    {
        code: "WILSON03",
        name: "Forfait Détente",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.",
        startdate: "01/10/2022",
        enddate:"30/04/2023",
        price: 660,
        newprice: 500,
        lodging:{name: "Manoir le Wilson", description:"Hôtel & Spa", address:"3208 rue Principale", city:"Sainte-Ferdinette", postalcode:"G0M 1N0", phonenumber:"1 800-842-1021", email:"info@manoirlewilson.com", website:"https://www.manoirlewilson"},
        categories: ["Hébergement" , "Restauration" , "Massothérapie"],
        rank:"Prenium",
        prenium: true,
        reviews: [
            {
                rating: 8,
                comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }
        ]
    },

    {
        code: "SPANAT001",
        name: "Forfait Nature et Spa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.",
        startdate: "01/11/2022",
        enddate:"31/03/2023",
        price: 750,
        lodging:{name: "Les Spas de la nature", description:"Chalet", address:"181, chemin Furbosia", city:"Canton de Standford", postalcode:"J0Y 1C0", phonenumber:"450-253-8888", email:"info@lesspasdelanature.com", website:"https://lesspasdelanature.com/"},
        categories: ["Hébergement" , "Nature" , "Spa"],
        rank:"Prenium",
        prenium: true,
        reviews: [
            {
                rating: 9.5,
                comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }
        ]
    },

    {
        code: "CHABOR001",
        name: "Forfait Totem",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.",
        startdate: "01/12/2022",
        enddate:"31/03/2023",
        price:450,
        newprice: 300,
        lodging:{name: "Les Chalets du Boréal", description:"Chalet", address:"4131, route du St-Laurent, Les Montagnes", city:"Québec", postalcode:"G0B 2M0", phonenumber:"418-153-6533", email:"info@chaletsboreal.com", website:"https://www.chaletboreal.com/"},
        categories: ["Hébergement" , "Nature" , "Spa"],
        rank:"Basique",
        reviews: []
    },

    {
        code: "CHABOR002",
        name: "Forfait Wampum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.",
        startdate: "01/12/2022",
        enddate:"31/03/2023",
        price:570,
        newprice: 380,
        lodging:{name: "Les Chalets du Boréal", description:"Chalet", address:"4131, route du St-Laurent, Les Montagnes", city:"Québec", postalcode:"G0B 2M0", phonenumber:"418-153-6533", email:"info@chaletsboreal.com", website:"https://www.chaletboreal.com/"},
        categories: ["Hébergement" , "Nature" , "Spa"],
        rank:"Standard",
        reviews: [
            {
                rating: 8,
                comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }
        ]
    },

    {
        code: "CHABOR003",
        name: "Forfait Wigwam",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.",
        startdate: "01/12/2022",
        enddate:"31/03/2023",
        price:690,
        newprice: 460,
        lodging:{name: "Les Chalets du Boréal", description:"Chalet", address:"4131, route du St-Laurent, Les Montagnes", city:"Québec", postalcode:"G0B 2M0", phonenumber:"418-153-6533", email:"info@chaletsboreal.com", website:"https://www.chaletboreal.com/"},
        categories: ["Hébergement" , "Nature" , "Spa"],
        rank:"Prenium",
        prenium: true,
        reviews: [
            {
                rating: 5,
                comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }
        ]
    },
    
    {
        code: "KOISPA001",
        name: "Forfait Détente",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.",
        startdate: "01/09/2022",
        enddate:"30/06/2022",
        price: 500,
        lodging:{name: "Koï spa japaonais & hébergement", description:"Hôtel & Spa", address:"1082, boulevard des Forgerons,", city:"Trois-Rivières", postalcode:"G9Y 4W1", phonenumber:"819-999-6933", email:"commentaires@koïspa.ca", website:"https://www.koispajaponais.ca/"},
        categories: ["Hébergement" , "Spa", "Massotérapie"],
        rank: "Basique",
        reviews: [
            {
                rating: 9,
                comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                rating: 9,
                comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }
        ]
    },

    {
        code: "KINIPI002",
        name: "Forfait Détente Plus",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.",
        startdate: "01/09/2022",
        enddate:"30/06/2022",
        price: 950,
        newprice: 750,
        lodging:{name: "Koï spa japaonais & hébergement", description:"Hôtel & Spa", address:"1082, boulevard des Forgerons,", city:"Trois-Rivières", postalcode:"G9Y 4W1", phonenumber:"819-999-6933", email:"commentaires@koïspa.ca", website:"https://www.koispajaponais.ca/"},
        categories: ["Hébergement" , "Spa", "Massotérapie", "Restauration"],
        rank: "Standard",
        reviews: [
            {
                rating: 7,
                comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }
        ]
    },

    {
        code: "KINIPI003",
        name: "Forfait Détente Super",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.",
        startdate: "01/09/2022",
        enddate:"30/06/2022",
        price: 1200,
        newprice: 925,
        lodging:{name: "Koï spa japaonais & hébergement", description:"Hôtel & Spa", address:"1082, boulevard des Forgerons,", city:"Trois-Rivières", postalcode:"G9Y 4W1", phonenumber:"819-999-6933", email:"commentaires@koïspa.ca", website:"https://www.koispajaponais.ca/"},
        categories: ["Hébergement" , "Spa", "Massotérapie", "Restauration"],
        rank: "Prenium",
        prenium: true,
        reviews: [
            {
                rating: 10,
                comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                rating: 10,
                comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }
        ]
    },
]