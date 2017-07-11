import { Food } from './food-type';
export const FOODS: Food[] = [
    {   id: 11, 
        name: 'Soto',
        description: 'Makanan berkuah dengan irisan daging',
        imageURL: 'https://jadiberita.com/wp-content/uploads/2016/05/Soto-Qraved-662x600.jpg',
        recipe: [
            {
                name: 'Daging',
                amount: '1',
                measure: 'kg',
            }
        ],
        step: [
            {
                description: 'Bersihkan daging terlebih dahulu'
            },
            {
                description: 'Iris tipis sesuai keinginan'
            },
        ]

     },

     {   id: 12, 
        name: 'Sate',
        description: 'Makanan berkuah dengan irisan daging',
        imageURL: 'http://img.ulinulin.com/uploads/media_item/file/32465/maksudi.jpg',
        recipe: [
            {
                name: 'Daging',
                amount: '1',
                measure: 'kg',
            }
        ],
        step: [
            {
                description: 'Bersihkan daging terlebih dahulu'
            },
            {
                description: 'Iris tipis sesuai keinginan'
            },
        ]

     },
];