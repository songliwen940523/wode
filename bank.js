import { observable } from 'mobx'
const bankStore = observable({
    banks: [],
    getBanks() {
        setTimeout(() => {
            const data = [
                {
                    "idList": [],
                    "orgCode": "CUPD",
                    "orgName": "银联数据",
                    "resv1": "1"
                },
                {
                    "idList": [],
                    "orgCode": "0003",
                    "orgName": "AEON",
                    "resv1": "48"
                },
                {
                    "idList": [],
                    "orgCode": "8447",
                    "orgName": "安徽农信",
                    "resv1": "54"
                },
                {
                    "idList": [],
                    "orgCode": "0456",
                    "orgName": "鞍山银行",
                    "resv1": "56"
                },
                {
                    "idList": [],
                    "orgCode": "2802",
                    "orgName": "澳门通",
                    "resv1": "57"
                },
                {
                    "idList": [],
                    "orgCode": "8656",
                    "orgName": "包商村镇",
                    "resv1": "58"
                },
                {
                    "idList": [],
                    "orgCode": "8479",
                    "orgName": "包商银行",
                    "resv1": "60"
                },
                {
                    "idList": [],
                    "orgCode": "0552",
                    "orgName": "保定银行",
                    "resv1": "61"
                },
                {
                    "idList": [],
                    "orgCode": "6478",
                    "orgName": "北部湾银行",
                    "resv1": "62"
                },
                {
                    "idList": [],
                    "orgCode": "1418",
                    "orgName": "北京农商",
                    "resv1": "63"
                },
                {
                    "idList": [],
                    "orgCode": "6403",
                    "orgName": "北京银行",
                    "resv1": "64"
                },
                {
                    "idList": [],
                    "orgCode": "8801",
                    "orgName": "北银消费",
                    "resv1": "65"
                },
                {
                    "idList": [],
                    "orgCode": "1203",
                    "orgName": "奔驰",
                    "resv1": "66"
                },
                {
                    "idList": [],
                    "orgCode": "0317",
                    "orgName": "渤海银行",
                    "resv1": "67"
                },
                {
                    "idList": [],
                    "orgCode": "8476",
                    "orgName": "沧州银行",
                    "resv1": "68"
                },
                {
                    "idList": [],
                    "orgCode": "0541",
                    "orgName": "长安银行",
                    "resv1": "69"
                },
                {
                    "idList": [],
                    "orgCode": "6472",
                    "orgName": "长春发展银行",
                    "resv1": "70"
                },
                {
                    "idList": [],
                    "orgCode": "6110",
                    "orgName": "长春农商银行",
                    "resv1": "71"
                },
                {
                    "idList": [],
                    "orgCode": "0461",
                    "orgName": "长沙银行",
                    "resv1": "73"
                },
                {
                    "idList": [],
                    "orgCode": "1403",
                    "orgName": "常熟农商",
                    "resv1": "76"
                },
                {
                    "idList": [],
                    "orgCode": "8549",
                    "orgName": "朝阳银行",
                    "resv1": "77"
                },
                {
                    "idList": [],
                    "orgCode": "6522",
                    "orgName": "成都农商",
                    "resv1": "78"
                },
                {
                    "idList": [],
                    "orgCode": "6429",
                    "orgName": "成都银行",
                    "resv1": "79"
                },
                {
                    "idList": [],
                    "orgCode": "6513",
                    "orgName": "承德银行",
                    "resv1": "80"
                },
                {
                    "idList": [],
                    "orgCode": "0530",
                    "orgName": "浙江稠州商业银行",
                    "resv1": "81"
                },
                {
                    "idList": [],
                    "orgCode": "8557",
                    "orgName": "达州商行",
                    "resv1": "82"
                },
                {
                    "idList": [],
                    "orgCode": "8334",
                    "orgName": "大华银行",
                    "resv1": "83"
                },
                {
                    "idList": [],
                    "orgCode": "0420",
                    "orgName": "大连银行",
                    "resv1": "85"
                },
                {
                    "idList": [],
                    "orgCode": "8008",
                    "orgName": "丹东村镇银行",
                    "resv1": "87"
                },
                {
                    "idList": [],
                    "orgCode": "0446",
                    "orgName": "丹东银行",
                    "resv1": "88"
                },
                {
                    "idList": [],
                    "orgCode": "6515",
                    "orgName": "德州银行",
                    "resv1": "89"
                },
                {
                    "idList": [],
                    "orgCode": "2879",
                    "orgName": "迪拜商业银行",
                    "resv1": "90"
                },
                {
                    "idList": [],
                    "orgCode": "0505",
                    "orgName": "东莞银行",
                    "resv1": "91"
                },
                {
                    "idList": [],
                    "orgCode": "6320",
                    "orgName": "东亚银行",
                    "resv1": "92"
                },
                {
                    "idList": [],
                    "orgCode": "6527",
                    "orgName": "东营商行",
                    "resv1": "94"
                },
                {
                    "idList": [],
                    "orgCode": "0534",
                    "orgName": "鄂尔多斯银行",
                    "resv1": "96"
                },
                {
                    "idList": [],
                    "orgCode": "0333",
                    "orgName": "法兴银行",
                    "resv1": "97"
                },
                {
                    "idList": [],
                    "orgCode": "0405",
                    "orgName": "海峡银行",
                    "resv1": "98"
                },
                {
                    "idList": [],
                    "orgCode": "6517",
                    "orgName": "福建农信",
                    "resv1": "99"
                },
                {
                    "idList": [],
                    "orgCode": "8430",
                    "orgName": "抚顺银行",
                    "resv1": "100"
                },
                {
                    "idList": [],
                    "orgCode": "8015",
                    "orgName": "阜新村镇",
                    "resv1": "101"
                },
                {
                    "idList": [],
                    "orgCode": "0467",
                    "orgName": "阜新银行",
                    "resv1": "102"
                },
                {
                    "idList": [],
                    "orgCode": "0339",
                    "orgName": "富邦华一银行",
                    "resv1": "104"
                },
                {
                    "idList": [],
                    "orgCode": "6466",
                    "orgName": "富滇银行",
                    "resv1": "105"
                },
                {
                    "idList": [],
                    "orgCode": "1453",
                    "orgName": "甘肃农信",
                    "resv1": "106"
                },
                {
                    "idList": [],
                    "orgCode": "0581",
                    "orgName": "甘肃银行",
                    "resv1": "107"
                },
                {
                    "idList": [],
                    "orgCode": "6463",
                    "orgName": "赣州银行",
                    "resv1": "108"
                },
                {
                    "idList": [],
                    "orgCode": "6489",
                    "orgName": "广东南粤银行",
                    "resv1": "110"
                },
                {
                    "idList": [],
                    "orgCode": "1443",
                    "orgName": "广西农信",
                    "resv1": "112"
                },
                {
                    "idList": [],
                    "orgCode": "6505",
                    "orgName": "广州农商",
                    "resv1": "113"
                },
                {
                    "idList": [],
                    "orgCode": "6413",
                    "orgName": "广州银行",
                    "resv1": "115"
                },
                {
                    "idList": [],
                    "orgCode": "6443",
                    "orgName": "贵阳银行",
                    "resv1": "116"
                },
                {
                    "idList": [],
                    "orgCode": "0519",
                    "orgName": "贵州银行安顺分行",
                    "resv1": "117"
                },
                {
                    "idList": [],
                    "orgCode": "6491",
                    "orgName": "桂林银行",
                    "resv1": "118"
                },
                {
                    "idList": [],
                    "orgCode": "1202",
                    "orgName": "国旅",
                    "resv1": "119"
                },
                {
                    "idList": [],
                    "orgCode": "8521",
                    "orgName": "哈尔滨村镇银行",
                    "resv1": "120"
                },
                {
                    "idList": [],
                    "orgCode": "6442",
                    "orgName": "哈尔滨银行",
                    "resv1": "121"
                },
                {
                    "idList": [],
                    "orgCode": "0589",
                    "orgName": "邯郸银行",
                    "resv1": "123"
                },
                {
                    "idList": [],
                    "orgCode": "0507",
                    "orgName": "汉口银行",
                    "resv1": "124"
                },
                {
                    "idList": [],
                    "orgCode": "6423",
                    "orgName": "杭州银行",
                    "resv1": "125"
                },
                {
                    "idList": [],
                    "orgCode": "1441",
                    "orgName": "河北农信",
                    "resv1": "128"
                },
                {
                    "idList": [],
                    "orgCode": "6422",
                    "orgName": "河北银行",
                    "resv1": "129"
                },
                {
                    "idList": [],
                    "orgCode": "6114",
                    "orgName": "河南农信",
                    "resv1": "131"
                },
                {
                    "idList": [],
                    "orgCode": "6311",
                    "orgName": "恒丰银行",
                    "resv1": "133"
                },
                {
                    "idList": [],
                    "orgCode": "6561",
                    "orgName": "衡水银行",
                    "resv1": "134"
                },
                {
                    "idList": [],
                    "orgCode": "0432",
                    "orgName": "湖北银行",
                    "resv1": "135"
                },
                {
                    "idList": [],
                    "orgCode": "6538",
                    "orgName": "湖南农信",
                    "resv1": "136"
                },
                {
                    "idList": [],
                    "orgCode": "8433",
                    "orgName": "葫芦岛银行",
                    "resv1": "138"
                },
                {
                    "idList": [],
                    "orgCode": "0319",
                    "orgName": "花旗银行",
                    "resv1": "139"
                },
                {
                    "idList": [],
                    "orgCode": "6304",
                    "orgName": "华夏银行",
                    "resv1": "140"
                },
                {
                    "idList": [],
                    "orgCode": "1446",
                    "orgName": "黄河农商",
                    "resv1": "141"
                },
                {
                    "idList": [],
                    "orgCode": "6440",
                    "orgName": "徽商银行",
                    "resv1": "142"
                },
                {
                    "idList": [],
                    "orgCode": "0321",
                    "orgName": "汇丰银行",
                    "resv1": "144"
                },
                {
                    "idList": [],
                    "orgCode": "6471",
                    "orgName": "九台农商银行",
                    "resv1": "147"
                },
                {
                    "idList": [],
                    "orgCode": "8445",
                    "orgName": "吉林农信",
                    "resv1": "148"
                },
                {
                    "idList": [],
                    "orgCode": "0406",
                    "orgName": "吉林银行",
                    "resv1": "150"
                },
                {
                    "idList": [],
                    "orgCode": "2533",
                    "orgName": "建银亚洲",
                    "resv1": "151"
                },
                {
                    "idList": [],
                    "orgCode": "6524",
                    "orgName": "江苏农信",
                    "resv1": "153"
                },
                {
                    "idList": [],
                    "orgCode": "0521",
                    "orgName": "江苏银行",
                    "resv1": "155"
                },
                {
                    "idList": [],
                    "orgCode": "6448",
                    "orgName": "江西银行",
                    "resv1": "156"
                },
                {
                    "idList": [],
                    "orgCode": "1412",
                    "orgName": "江阴农商行",
                    "resv1": "158"
                },
                {
                    "idList": [],
                    "orgCode": "6439",
                    "orgName": "锦州银行",
                    "resv1": "160"
                },
                {
                    "idList": [],
                    "orgCode": "6449",
                    "orgName": "晋商银行",
                    "resv1": "161"
                },
                {
                    "idList": [],
                    "orgCode": "0573",
                    "orgName": "景德镇银行",
                    "resv1": "162"
                },
                {
                    "idList": [],
                    "orgCode": "6454",
                    "orgName": "九江银行",
                    "resv1": "163"
                },
                {
                    "idList": [],
                    "orgCode": "6113",
                    "orgName": "昆仑银行",
                    "resv1": "167"
                },
                {
                    "idList": [],
                    "orgCode": "0497",
                    "orgName": "莱商银行",
                    "resv1": "169"
                },
                {
                    "idList": [],
                    "orgCode": "6447",
                    "orgName": "兰州银行",
                    "resv1": "170"
                },
                {
                    "idList": [],
                    "orgCode": "3085",
                    "orgName": "老中银行",
                    "resv1": "171"
                },
                {
                    "idList": [],
                    "orgCode": "3081",
                    "orgName": "立桥银行",
                    "resv1": "172"
                },
                {
                    "idList": [],
                    "orgCode": "8555",
                    "orgName": "凉山州商业银行",
                    "resv1": "173"
                },
                {
                    "idList": [],
                    "orgCode": "8454",
                    "orgName": "辽宁省农村信用社联合社",
                    "resv1": "174"
                },
                {
                    "idList": [],
                    "orgCode": "6431",
                    "orgName": "临商银行",
                    "resv1": "175"
                },
                {
                    "idList": [],
                    "orgCode": "0500",
                    "orgName": "贵州银行六盘水分行",
                    "resv1": "176"
                },
                {
                    "idList": [],
                    "orgCode": "1518",
                    "orgName": "马鞍山农商银行",
                    "resv1": "179"
                },
                {
                    "idList": [],
                    "orgCode": "3542",
                    "orgName": "缅甸GTB银行",
                    "resv1": "180"
                },
                {
                    "idList": [],
                    "orgCode": "0305",
                    "orgName": "民生银行",
                    "resv1": "181"
                },
                {
                    "idList": [],
                    "orgCode": "0525",
                    "orgName": "浙江民泰商业银行",
                    "resv1": "182"
                },
                {
                    "idList": [],
                    "orgCode": "1451",
                    "orgName": "内蒙古农信",
                    "resv1": "184"
                },
                {
                    "idList": [],
                    "orgCode": "6474",
                    "orgName": "内蒙古银行",
                    "resv1": "185"
                },
                {
                    "idList": [],
                    "orgCode": "8548",
                    "orgName": "南京村镇银行",
                    "resv1": "186"
                },
                {
                    "idList": [],
                    "orgCode": "0424",
                    "orgName": "南京银行",
                    "resv1": "187"
                },
                {
                    "idList": [],
                    "orgCode": "6332",
                    "orgName": "南洋商业银行",
                    "resv1": "188"
                },
                {
                    "idList": [],
                    "orgCode": "0408",
                    "orgName": "宁波银行",
                    "resv1": "189"
                },
                {
                    "idList": [],
                    "orgCode": "0436",
                    "orgName": "宁夏银行",
                    "resv1": "190"
                },
                {
                    "idList": [],
                    "orgCode": "8888",
                    "orgName": "拍拍贷",
                    "resv1": "191"
                },
                {
                    "idList": [],
                    "orgCode": "8544",
                    "orgName": "盘锦市商业银行",
                    "resv1": "192"
                },
                {
                    "idList": [],
                    "orgCode": "0548",
                    "orgName": "平顶山银行",
                    "resv1": "193"
                },
                {
                    "idList": [],
                    "orgCode": "0310",
                    "orgName": "浦发银行",
                    "resv1": "195"
                },
                {
                    "idList": [],
                    "orgCode": "6409",
                    "orgName": "齐鲁银行",
                    "resv1": "197"
                },
                {
                    "idList": [],
                    "orgCode": "6438",
                    "orgName": "齐商银行",
                    "resv1": "199"
                },
                {
                    "idList": [],
                    "orgCode": "8457",
                    "orgName": "秦皇岛银行",
                    "resv1": "201"
                },
                {
                    "idList": [],
                    "orgCode": "6468",
                    "orgName": "秦农银行",
                    "resv1": "202"
                },
                {
                    "idList": [],
                    "orgCode": "1206",
                    "orgName": "青岛社保",
                    "resv1": "204"
                },
                {
                    "idList": [],
                    "orgCode": "6450",
                    "orgName": "青岛银行",
                    "resv1": "205"
                },
                {
                    "idList": [],
                    "orgCode": "1449",
                    "orgName": "青海农信",
                    "resv1": "206"
                },
                {
                    "idList": [],
                    "orgCode": "6458",
                    "orgName": "青海银行",
                    "resv1": "207"
                },
                {
                    "idList": [],
                    "orgCode": "8502",
                    "orgName": "曲靖商行",
                    "resv1": "208"
                },
                {
                    "idList": [],
                    "orgCode": "6455",
                    "orgName": "日照银行",
                    "resv1": "209"
                },
                {
                    "idList": [],
                    "orgCode": "5555",
                    "orgName": "山东省城市商业银行合作联盟有限公司",
                    "resv1": "211"
                },
                {
                    "idList": [],
                    "orgCode": "1414",
                    "orgName": "山东农信",
                    "resv1": "212"
                },
                {
                    "idList": [],
                    "orgCode": "6555",
                    "orgName": "山西农信",
                    "resv1": "213"
                },
                {
                    "idList": [],
                    "orgCode": "1442",
                    "orgName": "陕西农信",
                    "resv1": "214"
                },
                {
                    "idList": [],
                    "orgCode": "6501",
                    "orgName": "上海农商",
                    "resv1": "215"
                },
                {
                    "idList": [],
                    "orgCode": "6526",
                    "orgName": "上饶银行",
                    "resv1": "219"
                },
                {
                    "idList": [],
                    "orgCode": "0428",
                    "orgName": "绍兴银行",
                    "resv1": "220"
                },
                {
                    "idList": [],
                    "orgCode": "0417",
                    "orgName": "盛京银行",
                    "resv1": "223"
                },
                {
                    "idList": [],
                    "orgCode": "0543",
                    "orgName": "石嘴山银行",
                    "resv1": "225"
                },
                {
                    "idList": [],
                    "orgCode": "6508",
                    "orgName": "顺德农商",
                    "resv1": "226"
                },
                {
                    "idList": [],
                    "orgCode": "1452",
                    "orgName": "四川农信",
                    "resv1": "228"
                },
                {
                    "idList": [],
                    "orgCode": "6496",
                    "orgName": "四川天府银行",
                    "resv1": "229"
                },
                {
                    "idList": [],
                    "orgCode": "1428",
                    "orgName": "吴江农商银行",
                    "resv1": "250"
                },
                {
                    "idList": [],
                    "orgCode": "6430",
                    "orgName": "苏州银行",
                    "resv1": "233"
                },
                {
                    "idList": [],
                    "orgCode": "8002",
                    "orgName": "遂宁银行",
                    "resv1": "234"
                },
                {
                    "idList": [],
                    "orgCode": "0459",
                    "orgName": "台州银行",
                    "resv1": "235"
                },
                {
                    "idList": [],
                    "orgCode": "0528",
                    "orgName": "泰安商行",
                    "resv1": "237"
                },
                {
                    "idList": [],
                    "orgCode": "0511",
                    "orgName": "浙江泰隆商业银行",
                    "resv1": "238"
                },
                {
                    "idList": [],
                    "orgCode": "6519",
                    "orgName": "天津农商",
                    "resv1": "240"
                },
                {
                    "idList": [],
                    "orgCode": "0434",
                    "orgName": "天津银行",
                    "resv1": "241"
                },
                {
                    "idList": [],
                    "orgCode": "0539",
                    "orgName": "铁岭银行",
                    "resv1": "242"
                },
                {
                    "idList": [],
                    "orgCode": "6481",
                    "orgName": "威海商行",
                    "resv1": "244"
                },
                {
                    "idList": [],
                    "orgCode": "6462",
                    "orgName": "潍坊银行",
                    "resv1": "245"
                },
                {
                    "idList": [],
                    "orgCode": "0412",
                    "orgName": "温州银行",
                    "resv1": "246"
                },
                {
                    "idList": [],
                    "orgCode": "0427",
                    "orgName": "乌鲁木齐银行",
                    "resv1": "248"
                },
                {
                    "idList": [],
                    "orgCode": "6444",
                    "orgName": "西安银行",
                    "resv1": "251"
                },
                {
                    "idList": [],
                    "orgCode": "0309",
                    "orgName": "兴业银行",
                    "resv1": "257"
                },
                {
                    "idList": [],
                    "orgCode": "3013",
                    "orgName": "星展银行",
                    "resv1": "258"
                },
                {
                    "idList": [],
                    "orgCode": "6554",
                    "orgName": "邢台银行",
                    "resv1": "261"
                },
                {
                    "idList": [],
                    "orgCode": "563",
                    "orgName": "阳泉商行",
                    "resv1": "264"
                },
                {
                    "idList": [],
                    "orgCode": "6534",
                    "orgName": "尧都农商",
                    "resv1": "265"
                },
                {
                    "idList": [],
                    "orgCode": "2529",
                    "orgName": "银盛金融",
                    "resv1": "270"
                },
                {
                    "idList": [],
                    "orgCode": "1420",
                    "orgName": "鄞州银行",
                    "resv1": "271"
                },
                {
                    "idList": [],
                    "orgCode": "8572",
                    "orgName": "营口沿海银行",
                    "resv1": "272"
                },
                {
                    "idList": [],
                    "orgCode": "0345",
                    "orgName": "玉山银行",
                    "resv1": "275"
                },
                {
                    "idList": [],
                    "orgCode": "6509",
                    "orgName": "云南农信",
                    "resv1": "276"
                },
                {
                    "idList": [],
                    "orgCode": "0322",
                    "orgName": "渣打银行",
                    "resv1": "277"
                },
                {
                    "idList": [],
                    "orgCode": "8490",
                    "orgName": "张家口银行",
                    "resv1": "278"
                },
                {
                    "idList": [],
                    "orgCode": "1429",
                    "orgName": "浙江农信",
                    "resv1": "279"
                },
                {
                    "idList": [],
                    "orgCode": "0316",
                    "orgName": "浙商银行",
                    "resv1": "280"
                },
                {
                    "idList": [],
                    "orgCode": "0362",
                    "orgName": "郑州银行",
                    "resv1": "281"
                },
                {
                    "idList": [],
                    "orgCode": "0368",
                    "orgName": "中铁银通",
                    "resv1": "285"
                },
                {
                    "idList": [],
                    "orgCode": "6586",
                    "orgName": "中原银行",
                    "resv1": "294"
                },
                {
                    "idList": [],
                    "orgCode": "1513",
                    "orgName": "重庆农商",
                    "resv1": "295"
                },
                {
                    "idList": [],
                    "orgCode": "6441",
                    "orgName": "重庆银行",
                    "resv1": "296"
                },
                {
                    "idList": [],
                    "orgCode": "6437",
                    "orgName": "珠海华润银行",
                    "resv1": "297"
                },
                {
                    "idList": [],
                    "orgCode": "6666",
                    "orgName": "银联济南分公司"
                },
                {
                    "idList": [],
                    "orgCode": "201907314",
                    "orgName": "无锡农商"
                },
                {
                    "idList": [],
                    "orgCode": "201907315",
                    "orgName": "乌商银行"
                },
                {
                    "idList": [],
                    "orgCode": "201908126",
                    "orgName": "柳州银行"
                },
                {
                    "idList": [],
                    "orgCode": "201908227",
                    "orgName": "中银通"
                },
                {
                    "idList": [],
                    "orgCode": "201908228",
                    "orgName": "江苏农信村镇银行"
                },
                {
                    "idList": [],
                    "orgCode": "201909169",
                    "orgName": "长沙生意通"
                },
                {
                    "idList": [],
                    "orgCode": "2019091610",
                    "orgName": "湖北银行宜昌分行"
                },
                {
                    "idList": [],
                    "orgCode": "2019091611",
                    "orgName": "苏州农商"
                },
                {
                    "idList": [],
                    "orgCode": "2019091612",
                    "orgName": "三三金融"
                },
                {
                    "idList": [],
                    "orgCode": "2019091613",
                    "orgName": "侨达国际"
                },
                {
                    "idList": [],
                    "orgCode": "2019091614",
                    "orgName": "成都农信"
                },
                {
                    "idList": [],
                    "orgCode": "2019091615",
                    "orgName": "中航结"
                },
                {
                    "idList": [],
                    "orgCode": "2019091616",
                    "orgName": "宜昌商行"
                },
                {
                    "idList": [],
                    "orgCode": "2019091617",
                    "orgName": "浦发村镇银行"
                },
                {
                    "idList": [],
                    "orgCode": "2019091618",
                    "orgName": "新加坡NETs钱包"
                },
                {
                    "idList": [],
                    "orgCode": "2019091619",
                    "orgName": "长沙商行"
                },
                {
                    "idList": [],
                    "orgCode": "2019091620",
                    "orgName": "阜新单位结算卡"
                },
                {
                    "idList": [],
                    "orgCode": "2019091621",
                    "orgName": "邢台单位结算卡"
                },
                {
                    "idList": [],
                    "orgCode": "2019091622",
                    "orgName": "邢台村镇"
                },
                {
                    "idList": [],
                    "orgCode": "2019091623",
                    "orgName": "葫芦岛村镇"
                },
                {
                    "idList": [],
                    "orgCode": "2019091624",
                    "orgName": "邢台农商村镇"
                },
                {
                    "idList": [],
                    "orgCode": "2019091625",
                    "orgName": "莱芜银行"
                },
                {
                    "idList": [],
                    "orgCode": "2019091626",
                    "orgName": "淄博银行"
                },
                {
                    "idList": [],
                    "orgCode": "2019091627",
                    "orgName": "临沂银行"
                },
                {
                    "idList": [],
                    "orgCode": "2019091628",
                    "orgName": "天津银行医付宝"
                },
                {
                    "idList": [],
                    "orgCode": "2019091832",
                    "orgName": "马鞍山银行"
                },
                {
                    "idList": [],
                    "orgCode": "20191219",
                    "orgName": "青岛农商"
                }]
            this.banks.push(...data)
        }, 1000)
    }


})
export default bankStore
