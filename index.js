const fs = require('fs')
const axios = require('axios')
var Table = require('cli-table3');
const dayjs = require('dayjs')


const thingy = [{"name":"CJ대한통운","code":"04"}, {"name":"우체국택배","code":"01"}, {"name":"한진택배","code":"05"}, {"name":"롯데택배","code":"08"}, {"name":"로젠택배","code":"06"}, {"name":"홈픽","code":"54"}, {"name":"CVSnet 편의점택배(GS25)","code":"24"}, {"name":"CU 편의점택배","code":"46"}, {"name":"경동택배","code":"23"}, {"name":"대신택배","code":"22"}, {"name":"일양로지스","code":"11"}, {"name":"합동택배","code":"32"}, {"name":"건영택배","code":"18"}, {"name":"천일택배","code":"17"}, {"name":"한덱스","code":"20"}, {"name":"한의사랑택배","code":"16"}, {"name":"EMS","code":"12"}, {"name":"TNT Express","code":"25"}, {"name":"UPS","code":"14"}, {"name":"Fedex","code":"21"}, {"name":"USPS","code":"26"}, {"name":"i-Parcel","code":"34"}, {"name":"DHL Global Mail","code":"33"}, {"name":"LX판토스","code":"37"}, {"name":"GSMNtoN","code":"28"}, {"name":"ECMS Express","code":"38"}, {"name":"KGL네트웍스","code":"30"}, {"name":"굿투럭","code":"40"}, {"name":"우리택배(구호남택배)","code":"45"}, {"name":"GSI Express","code":"41"}, {"name":"SLX택배","code":"44"}, {"name":"우리한방택배","code":"47"}, {"name":"세방","code":"52"}, {"name":"Cway Express","code":"57"}, {"name":"YJS글로벌(영국)","code":"60"}, {"name":"성원글로벌카고","code":"51"}, {"name":"홈이노베이션로지스","code":"62"}, {"name":"은하쉬핑","code":"63"}, {"name":"Giant Network Group","code":"66"}, {"name":"FLF퍼레버택배","code":"64"}, {"name":"농협택배","code":"53"}, {"name":"YJS글로벌(월드)","code":"65"}, {"name":"디디로지스","code":"67"}, {"name":"대림통운","code":"69"}, {"name":"LOTOS CORPORATION","code":"70"}, {"name":"애니트랙","code":"43"}, {"name":"성훈물류","code":"72"}, {"name":"IK물류","code":"71"}, {"name":"제니엘시스템","code":"81"}, {"name":"스마트로지스","code":"84"}, {"name":"이투마스(ETOMARS)","code":"87"}, {"name":"풀앳홈","code":"85"}, {"name":"프레시솔루션","code":"82"}, {"name":"큐런택배","code":"88"}, {"name":"두발히어로","code":"89"}, {"name":"하이브시티","code":"91"}, {"name":"오늘의픽업","code":"94"}, {"name":"팬스타국제특송(PIEX)","code":"93"}, {"name":"지니고 당일배송","code":"92"}, {"name":"로지스밸리","code":"96"}, {"name":"롯데국제특송","code":"99"}, {"name":"나은물류","code":"100"}, {"name":"한샘서비스원 택배","code":"101"}, {"name":"배송하기좋은날 (SHIPNERGY)","code":"102"}, {"name":"NDEX KOREA","code":"103"}, {"name":"도도플렉스(dodoflex)","code":"104"}, {"name":"브릿지로지스㈜","code":"105"}, {"name":"허브넷로지스틱스","code":"106"}, {"name":"MEXGLOBAL","code":"108"}, {"name":"A.C.E EXPRESS INC","code":"49"}, {"name":"썬더히어로","code":"113"}, {"name":"1004홈","code":"112"}, {"name":"㈜캐나다쉬핑","code":"114"}, {"name":"부릉","code":"110"}, {"name":"YUNDA EXPRESS","code":"117"}, {"name":"발렉스 특수물류","code":"120"}, {"name":"파테크해운항공","code":"109"}, {"name":"핑퐁","code":"119"}, {"name":"바바바(bababa)","code":"121"}, {"name":"BAIMA EXPRESS","code":"122"}, {"name":"엔티엘피스","code":"123"}, {"name":"LTL","code":"124"}, {"name":"GTS 로지스","code":"125"}, {"name":"㈜올타코리아","code":"126"}, {"name":"판월드로지스틱㈜","code":"128"}, {"name":"큐익스프레스","code":"95"}, {"name":"UFO로지스","code":"130"}, {"name":"딜리래빗","code":"131"}, {"name":"지오피","code":"132"}, {"name":"에이치케이홀딩스","code":"134"}, {"name":"HTNS","code":"135"}, {"name":"DHL","code":"13"}, {"name":"라스트마일","code":"138"}, {"name":"인터로지스","code":"141"}, {"name":"탱고앤고","code":"142"}, {"name":"직구문","code":"140"}, {"name":"투데이","code":"143"}, {"name":"큐브플로우(CUBEFLOW)","code":"144"}, {"name":"현대글로비스","code":"145"}, {"name":"국제로지스틱(KSE)","code":"146"}, {"name":"에스더쉬핑","code":"147"}, {"name":"ARGO","code":"148"}, {"name":"골드스넵스","code":"149"}, {"name":"GNG(자이언트)","code":"151"}, {"name":"(주)엠티인터내셔널","code":"152"}]

async function fetchPassportKey() {
    const thing = await axios({
        method: 'get',
        url: 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%86%A1%EC%9E%A5%EC%A1%B0%ED%9A%8C',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0'
        }
    }).then(res => res.data)
    const e = thing.search("passportKey") + 13
    return thing.substring(e, e + 200).split(";")[0].replaceAll("}", "").replaceAll('"', '').trim()
}

function idk(int) {
    switch (int) {
        case 2:
            return "인수"
        case 3:
            return "이동중"
        case 4:
            return "배달지"
        case 5:
            return "배달중"
        case 6:
            return "완료"
    default:
        return "?"
    }
}

function idFromString(str) {
    const filtered = thingy.filter(s => s.name.includes(str))
    if (filtered.length > 1) {
        return filtered.map(i => i.code)
    } else if (!filtered.length) {
        return false
    } else {
        return [filtered[0].code]
    }
}

(async () => {
    const deliveries = []
    const f = fs.readFileSync("deliveries.txt", 'utf-8')
    for (const s of f.split("\n")) {
        if (!s.length)
            continue
        const t = s.split(" ")
        deliveries.push({"id": t[0], "where": t.slice(1).join(" ")})
    }
    console.log(deliveries)


    if (!deliveries.length)
        return
    const passport = await fetchPassportKey()
    for (const obj of deliveries) {
        const e = idFromString(obj.where)
        if (!e) {
            console.log("Ingored value : " + obj.id + ", no delivery provider found. (" + obj.where + ")")
            continue
        }
        console.log(`showing '${obj.where} ${obj.id}' results. (total ${e.length} results)`)
        let write = ""
        for (const provider of e) {
            const t = await axios({url: `https://m.search.naver.com/p/csearch/ocontent/util/headerjson.naver?callapi=parceltracking&t_code=${provider}&t_invoice=${obj.id}&passportKey=${passport}`,
                headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0"
                },
                method: "GET"
            }).then(res => res.data)
            if (t.result != "Y") {
                write += "no result found.\n"
                write += JSON.stringify(t)
            } else {
                write += (`Deliveried? : ${t.completeYN}, Now : ${idk(t.lastStateDetail.level)}\n`)
                const table = new Table({head: ["배송시간", "현재위치", "배송상태", "상태"], style: { border: [], head: [] }, colWidths: [25, 25, 25, 15]})
                for (const detail of t.trackingDetails) {
                    table.push([dayjs(detail.time).format("YYYY-MM-DD HH:mm"), detail.where, detail.kind, idk(detail.level)])
                }
                write += (table.toString('utf-8'))
                write += ("\n\n")
            }
        }

        fs.writeFileSync(`results/${obj.where} ${obj.id}.txt`, write)
    }
})()
