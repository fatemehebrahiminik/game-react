import chinese_1 from '../assets/images/chinese-1.jpg';
import chinese_2 from '../assets/images/chinese-2.jpg';
import chinese_3 from '../assets/images/chinese-3.jpg';
import japanese_1 from '../assets/images/japanese-1.jpg';
import japanese_2 from '../assets/images/japanese-2.jpg';
import japanese_3 from '../assets/images/japanese-3.jpg';
import korean_1 from '../assets/images/korean-1.jpg';
import korean_2 from '../assets/images/korean-2.jpg';
import korean_3 from '../assets/images/korean-3.jpg';
import thai_1 from '../assets/images/thai-1.jpg';
import thai_2 from '../assets/images/thai-2.jpg';
import thai_3 from '../assets/images/thai-3.jpg';

export class PersonHelper {

    static Nationalities = {
        Japanese: 1,
        Chinese: 2,
        Korean: 3,
        Thai: 4
    };

    static GetRandomId = () => Math.floor(Math.random() * 100);

    static GetPersons = () => {

        let items = [
            {
                Nationality: this.Nationalities.Japanese,
                Image: japanese_1
            },
            {
                Nationality: this.Nationalities.Japanese,
                Image: japanese_2
            },
            {
                Nationality: this.Nationalities.Japanese,
                Image: japanese_3
            },
            {
                Nationality: this.Nationalities.Chinese,
                Image: chinese_1
            },
            {
                Nationality: this.Nationalities.Chinese,
                Image: chinese_2
            },
            {
                Nationality: this.Nationalities.Chinese,
                Image: chinese_3
            },
            {
                Nationality: this.Nationalities.Korean,
                Image: korean_1
            },
            {
                Nationality: this.Nationalities.Korean,
                Image: korean_2
            },
            {
                Nationality: this.Nationalities.Korean,
                Image: korean_3
            },
            {
                Nationality: this.Nationalities.Thai,
                Image: thai_1
            },
            {
                Nationality: this.Nationalities.Thai,
                Image: thai_2
            },
            {
                Nationality: this.Nationalities.Thai,
                Image: thai_3
            },
        ];

        return items.map(item => {item.Id = this.GetRandomId(); return item;}).sort((item1, item2) => item1.Id - item2.Id);
    }
}