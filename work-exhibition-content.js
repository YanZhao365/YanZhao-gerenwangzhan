// Only approved / first-pass exhibit treatments live here; indices match content.js.
window.exhibitionPieces={
  0:{theme:'bookshop',image:'我的作品/海报文件/印刷网格风/城市睡了，还有一盏灯.png',title:['THE CITY','SLEEPS.','WE READ.'],subtitle:'A LIGHT LEFT ON FOR READERS',category:'书店夜读 / 叙事海报',note:['COMMUNITY BOOKSHOP','ANNIVERSARY NIGHT READING'],alt:'深蓝夜色中，熊坐在亮着暖灯的社区书店门口读书'},
  1:{theme:'bread',image:'我的作品/海报文件/印刷网格风/秋天的第一口核桃香.png',title:['A TASTE','OF','AUTUMN'],subtitle:'WALNUT SOURDOUGH',category:'食品宣传 / 海报',note:['SLOW FERMENTED.','BAKED DAILY.'],alt:'木板上的核桃酸面包，配有秋天的第一口核桃香及产品文字'},
  2:{theme:'repair',image:'我的作品/海报文件/印刷网格风/有些陪伴，修一修还能继续.png',title:['SOME BONDS','ARE WORTH','MENDING.'],subtitle:'A SECOND LIFE FOR OLD THINGS',category:'旧物修理 / 叙事海报',note:['REPAIR A LITTLE.','STAY A LITTLE LONGER.'],alt:'窗边的老人修理旧机器人，机器人抱着一束花'},
  3:{theme:'coffee',layout:'square',image:'我的作品/海报文件/印刷网格风/慢一点，也没关系.png',title:['TAKE','YOUR','TIME.'],subtitle:'A MOMENT FOR COFFEE',category:'咖啡主题 / 叙事海报',note:['IT’S OKAY','TO SLOW DOWN.'],alt:'背着邮包的蜗牛在咖啡窗口接过一杯咖啡'},
  4:{theme:'stars',image:'我的作品/海报文件/印刷网格风/把夜晚还给星星.png',title:['GIVE THE','NIGHT BACK','TO THE STARS'],subtitle:'LESS LIGHT. MORE STARS.',category:'公益倡议 / 海报',note:['ONE LESS LIGHT.','A SKY FULL OF STARS.'],alt:'星空下的城市屋顶，角色关闭广告牌照明，倡议减少光污染'},
  5:{theme:'records',image:'我的作品/海报文件/印刷网格风/你听过的歌，去陪另一个人.png',title:['YOUR SONGS.','SOMEONE','ELSE’S STORY.'],subtitle:'WEEKEND SECOND-HAND RECORD EXCHANGE',category:'唱片交换 / 活动海报',note:['PASS THE RECORD.','PASS THE COMPANY.'],alt:'车站里狐狸与企鹅交换唱片，身旁摆着唱片箱'},
  6:{theme:'snow',layout:'panorama',image:'我的作品/海报文件/印刷网格风/雪日大合影.png',title:['A SNOW DAY','TOGETHER'],subtitle:'',category:'角色群像 / 插画',note:[],alt:'雪地中各色人物与动物聚在一起微笑合影'},
  7:{theme:'plants',layout:'landscape',image:'我的作品/海报文件/印刷网格风/出门几天，绿意有人照顾.png',title:['YOU GO.','YOUR GREEN','STAYS.'],subtitle:'PLANT SITTING, WHILE YOU’RE AWAY',category:'植物寄养 / 服务海报',note:['A FEW DAYS AWAY.','YOUR PLANTS IN GOOD HANDS.'],alt:'带着行李箱的兔子将绿植交给植物寄养店里的水獭'},
  8:{theme:'forest',image:'我的作品/海报文件/印刷网格风/别惊动这片森林.png',title:['LET THE','FOREST','SLEEP'],subtitle:'A FANTASY JUNGLE EXPEDITION',category:'奇幻探险 / 海报',note:['DON’T WAKE','WHAT LIES WITHIN.'],alt:'巨蟒、食人植物与狐狸探险者构成的奇幻森林海报'},
  9:{theme:'lost',layout:'square',image:'我的作品/海报文件/印刷网格风/星际失物招领.png',title:['INTERSTELLAR','LOST &','FOUND'],subtitle:'AN INDEPENDENT SCI-FI AUDIO DRAMA',category:'科幻广播剧 / 海报',note:['LOST & FOUND','ACROSS THE STARS'],alt:'浣熊在失物招领柜台检查发光的小月球，机器人在柜台前等候'},
  10:{theme:'sunset',image:'我的作品/海报文件/印刷网格风/吞掉落日.png',title:['SWALLOW','THE','SUNSET.'],subtitle:'A SURREAL ROCK FESTIVAL',category:'音乐节 / 超现实海报',note:['SWALLOW','THE SUNSET.'],alt:'巨鲸张口吞向落日，背上载着游乐设施，地面龟裂'}
};
// Palettes belong to the exhibit, never to the image itself.
const exhibitPalettes={
  bookshop:['#0b1c2c','#eee1c5','#e8ac4d','#c2c9c9'],bread:['#eee1c9','#402410','#795024','#6b4a32'],
  repair:['#d9d9ca','#273d42','#93442e','#4c605f'],coffee:['#eee5cf','#213f32','#9c4127','#4d6556'],
  stars:['#0a1c30','#e7e7da','#a9cae2','#bbcad7'],records:['#b8ced1','#203b3a','#8b3c2f','#3d5959'],
  snow:['#f1e4c9','#493c32','#90592b','#665449'],plants:['#dce1ca','#254537','#87512d','#4d6653'],
  forest:['#17251f','#e7dfc6','#c9ad68','#bcc5b7'],lost:['#263a43','#eee4cf','#e2b76c','#c2ccd0'],
  sunset:['#2e202d','#f3e2c7','#ff8955','#dbc3c7']
};
Object.values(window.exhibitionPieces).forEach(piece=>piece.palette=exhibitPalettes[piece.theme]);

const additionalExhibitionDetails = {
  "毛绒可爱风 01": {title:["A Basketful","of Sky"], subtitle:"There’s room for one more cloud on the way home.", surface:'#302829', accent:'#f4d7a2'},
  "毛绒可爱风 02": {title:["After the Credits"], subtitle:"The screen goes dark. They stay a little longer.", surface:'#151a29', accent:'#ebbd7d', layout:'stacked'},
  "毛绒可爱风 03": {title:["Thunder","Under the Covers"], subtitle:"There’s room for two beneath the blanket.", surface:'#362747', accent:'#ffcc98'},
  "毛绒可爱风 04": {title:["The Spot Beside Me"], subtitle:"One little cushion says everything.", surface:'#3a271d', accent:'#ffd39f', layout:'stacked'},
  "毛绒可爱风 05": {title:["The Cool Side","of Summer"], subtitle:"Even a snail needs somewhere to stop.", surface:'#3b321c', accent:'#f2d577', layout:'stacked'},
  "毛绒可爱风 06": {title:["A Stitch","of Moonlight"], subtitle:"A tiny spider has just the thread for a crescent.", surface:'#151d3a', accent:'#ffda8e'},
  "毛绒可爱风 07": {title:["Wings Can Wait"], subtitle:"They’ll leave the stump when they’re both ready.", surface:'#3e2921', accent:'#ffc285'},
  "毛绒可爱风 08": {title:["What the Shell","Heard"], subtitle:"Hold it close. Even down here, you can hear the wind.", surface:'#15383a', accent:'#9be5d3', layout:'stacked'},
  "毛绒可爱风 09": {title:["A Window","in the Sand"], subtitle:"On the other side of the frame, the waves are still rolling in.", surface:'#422e23', accent:'#efc18c'},
  "毛绒可爱风 10": {title:["Pie for Two"], subtitle:"The smallest guest gets a slice, too.", surface:'#402527', accent:'#ffa9a9'},
  "毛绒可爱风 11": {title:["A Star","at the Window"], subtitle:"A little paw reaches into the dark with a light to share.", surface:'#241d3c', accent:'#ffd285'},
  "玻璃奇幻风 01": {title:["The Weight","of Thunder"], subtitle:"A beetle pushes on as blue light splits the ice.", surface:'#202736', accent:'#99e5ef', layout:'stacked'},
  "玻璃奇幻风 02": {title:["Where the Crown","Casts Its Shadow"], subtitle:"Beneath the lanterns, a giant opens one eye.", surface:'#232827', accent:'#e5bc80', layout:'stacked'},
  "玻璃奇幻风 03": {title:["A Whale Above","the Ruins"], subtitle:"Through the broken dome, a blue silhouette rises.", surface:'#12182e', accent:'#a9c5ff'},
  "玻璃奇幻风 04": {title:["First Light","on Stone"], subtitle:"Dawn catches the gargoyle’s wings above the rooftops.", surface:'#242439', accent:'#efbc85'},
  "玻璃奇幻风 05": {title:["The Midnight Post"], subtitle:"One last letter before the tide comes in.", surface:'#101c36', accent:'#f4d18c'},
  "玻璃奇幻风 06": {title:["The Guest","at the Red Table"], subtitle:"A hand reaches for the candle. Its shadow reaches farther.", surface:'#28171d', accent:'#eeb0a3'},
  "玻璃奇幻风 07": {title:["The Hour","Takes Wing"], subtitle:"Glass-winged birds sweep past a pendulum above the clouds.", surface:'#292339', accent:'#dac1fa', layout:'stacked'},
  "玻璃奇幻风 08": {title:["Through the Rings"], subtitle:"A door glows in the heart of a fallen trunk above the rapids.", surface:'#1c2c2b', accent:'#f1cf87', layout:'stacked'},
  "玻璃奇幻风 09": {title:["A Sliver of Day"], subtitle:"A deer lifts its antlers toward the light breaking through the glass.", surface:'#162824', accent:'#c5dc9f'},
  "玻璃奇幻风 10": {title:["The Sea","Below the Wings"], subtitle:"A glass-winged moth crosses the cold sea, just above the waves.", surface:'#172834', accent:'#aedbeb'},
};
