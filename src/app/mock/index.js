//引入mockjs
import Mock from 'mockjs';
let baseUrl = 'http://api.wendy.com';

const foods = {
    'foods|10-50': [{
        'id|+1': 1,
        'name': "@ctitle(2,10)",
        "img": "@image('600x600',#b7ef7c)",
        "brief": "@csentence(1,50)",
        "price|0-20.0-2": 1,
        "num": 0,
        "minusFlag": true,
        "time": "@time",
        "peisongfei|0-100.0-2": 1,
        "limit|0-50": 1
    }]
};
const sales = {
    "sales|10-50": [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name': "@ctitle(2,10)",
        "img": "@image('600x600',#b7ef7c)",
        "brief": "@csentence(1,50)",
        "price|0-100.0-2": 1,
        "num": 0,
        "minusFlag": true,
        "time": "@time",
        "peisongfei|0-100.0-2": 1,
        "limit|0-100": 1
    }]
};
Mock.mock(baseUrl+'/foods', 'get', foods);
Mock.mock(baseUrl+'/sales', 'get', sales);