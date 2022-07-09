//title
//正常にプレイヤーデータをロードしました。


let title = -1

register("chat", () => { title = 5 }).setCriteria("${*}プレイヤーデータ${*}")


register("step", () => {
  if (title > -1) {
    title++
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (title === -1) return
  displayedText = "&n&l&d[ &cThe&6low&e+ &av&20.7.2? &7by &bSuratin&d ]"
  Renderer.drawString(displayedText, 10, 15)
})




// バーサークタイマー

let bskTimer = -1

register("chat", () => { bskTimer = 5 }).setCriteria("[武器スキル] ${*}がバーサークを発動")


register("step", () => {
  if (bskTimer > -1) {
    bskTimer--
	World.playSound("mob.blaze.hit", 175, 1);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (bskTimer === -1) return
  displayedText = "&c&n[Berserk : " + bskTimer + "s]"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+5)
})

// 覚醒タイマー

let awaTimer = -1

register("chat", () => { awaTimer = 20 }).setCriteria("[武器スキル] ${*}が覚醒を発動")


register("step", () => {
  if (awaTimer > -1) {
    awaTimer--
	World.playSound("mob.enderdragon.hit", 250, 1.7);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (awaTimer === -1) return
  displayedText = "&b&n[Awaken : " + awaTimer + "s]"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+15)
})

//砂海1v1タイマー

let sakaiNdTimer = -1

register("chat", () => { sakaiNdTimer = 33 }).setCriteria("${*}誰かが無機質な傀儡に攫われた！戦いに勝利してくれるのを祈ろう！${*}")


register("step", () => {
  if (sakaiNdTimer > -1) {
    sakaiNdTimer--
	World.playSound("tile.piston.in", 250, 1.7);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (sakaiNdTimer === -1) return
  displayedText = "&4&l[砂] 1v1 Strike : " + sakaiNdTimer + ""
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+25)
})

//砂海頭上ガラスタイマー

let sakaiHeadGrassTimer = -1

register("chat", () => { sakaiHeadGrassTimer = 35 }).setCriteria("${*}リィは使えない。全力で逃げろ！${*}")


register("step", () => {
  if (sakaiHeadGrassTimer > -1) {
    sakaiHeadGrassTimer--
	World.playSound("mob.wither.shoot", 250, 1.7);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (sakaiHeadGrassTimer === -1) return
  displayedText = "&5&l⚡ [砂]Purple Thunder : " + sakaiHeadGrassTimer + " ⚡"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+25)
})


//砂海パリィ禁止タイマー

let sakaiSkillBlock = -1

register("chat", () => { sakaiSkillBlock = 60 }).setCriteria("${*}使っていた魔法が使えなくなった${*}")


register("step", () => {
  if (sakaiSkillBlock > -1) {
    sakaiSkillBlock--
	World.playSound("mob.wither.shoot", 250, 1.7);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (sakaiSkillBlock === -1) return
  displayedText = "&5&lX [砂]no Parii : " + sakaiSkillBlock + " X"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+50)
})


//常闇N 2v2タイマー

let yami2v2NTimer = -1

register("chat", () => { yami2v2NTimer = 65 }).setCriteria("${*}九の刻${*}")


register("step", () => {
  if (yami2v2NTimer > -1) {
    yami2v2NTimer--
	if (yami2v2NTimer > 10) {
		World.playSound("random.break", 300, 1);
	}else{
		World.playSound("random.anvil_land", 300, 1);
	}
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (yami2v2NTimer === -1) return
  displayedText = "&d&l⚔ [闇]2v2 :" + yami2v2NTimer + " (T:-5s) ⚔"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+25)
})

register("chat", () => { yami2v2NTimer = -1 }).setCriteria("${*}地下からの脱出に成功した${*}")

//autogg when
//register("chat", () => { ChatLib.say("gg") }).setCriteria("${*}ドロップしました${*}")


//Xen Timer
// 400 820 1060

let xenTimer = -1

register("chat", () => { xenTimer = 0 }).setCriteria("${*}れが本当の闘い${*}")


register("step", () => {
  if (xenTimer > -1) {
    xenTimer++
		World.playSound("note.harp", 1000, 1);
	
	if (xenTimer >= 391 && xenTimer < 401) {
		World.playSound("random.anvil_break", 300, 2.2);
	}
	if (xenTimer >= 811 && xenTimer < 821) {
		World.playSound("random.anvil_break", 300, 2.2);
	}
	if (xenTimer >= 1051 && xenTimer < 1061) {
		World.playSound("random.anvil_break", 300, 2.2);
	}
	if (xenTimer > 1061) {
		xenTimer = -1;
	}
	
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (xenTimer === -1) return
  if (xenTimer < 401) {
	  if (xenTimer >= 391) {
		  displayedText = "&4&l💀 [Xen]:" + xenTimer + " | #1:400 💀"
	  }else{
		displayedText = "&b&l💀 [Xen]:" + xenTimer + " | #1:400 💀"
	  }
  }else{
	  if (xenTimer < 821) {
		  if (xenTimer >= 811) {
			  displayedText = "&4&l💀 [Xen]:" + xenTimer + " | #2:820 💀"
		  }else{
		displayedText = "&b&l💀 [Xen]:" + xenTimer + " | #2:820 💀"
	  }
	  }else{
		  if (xenTimer < 1061) {
			  if (xenTimer >= 1051) {
				  displayedText = "&4&l💀 [Xen]:" + xenTimer + " | #3:1060 💀"
			  }else{
				  displayedText = "&b&l💀 [Xen]:" + xenTimer + " | #3:1060 💀"
			  }
		  }
		}
  }

  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+25)
})


//封印の洞窟ギミックタイマー

// template of count-up notice timer 
// true limit if + -10 than limit

//0(0) スケ(4) 蜘蛛(8) スケ(12) 蜘蛛(16) 蜘蛛(20) スケ(24) 死(25)
let huuinGimicTImer = -1

register("chat", () => { huuinGimicTImer = 0 }).setCriteria("${*}ドラゴン「娘の声が${*}")


register("step", () => {
  if (huuinGimicTImer > -1) {
    huuinGimicTImer++
		World.playSound("note.harp", 1000, 1);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (huuinGimicTImer === -1) return
  if (huuinGimicTImer >= 1501) return
  if (huuinGimicTImer < 241) {
    if (huuinGimicTImer >= 231) {
      displayedText = "&4&l◆ [封] Timer :" + huuinGimicTImer + " | #1/7:240 (Ske)◆"
    }else{
      displayedText = "&b&l◆ [封] Timer :" + huuinGimicTImer + " | #1/7:240 (Ske)◆"
    }
  }else{
    if (huuinGimicTImer < 481) {
      if (huuinGimicTImer >= 471) {
        displayedText = "&4&l◆ [封] Timer :" + huuinGimicTImer + " | #2/7:480 (Spi)◆"
      }else{
        displayedText = "&b&l◆ [封] Timer :" + huuinGimicTImer + " | #2/7:480 (Spi)◆"
      }
    }else{
      if (huuinGimicTImer < 721) {
        if (huuinGimicTImer >= 711) {
          displayedText = "&4&l◆ [封] Timer :" + huuinGimicTImer + " | #3/7:720 (Ske)◆"
        }else{
          displayedText = "&b&l◆ [封] Timer :" + huuinGimicTImer + " | #3/7:720 (Ske)◆"
        }
      }else{
        if (huuinGimicTImer < 961) {
          if (huuinGimicTImer >= 951) {
            displayedText = "&4&l◆ [封] Timer :" + huuinGimicTImer + " | #4/7:960 (Spi)◆"
          }else{
            displayedText = "&b&l◆ [封] Timer :" + huuinGimicTImer + " | #4/7:960 (Spi)◆"
          }
        }else{
          if (huuinGimicTImer < 1201) {
            if (huuinGimicTImer >= 1191) {
            displayedText = "&4&l◆ [封] Timer :" + huuinGimicTImer + " | #5/7:1200 (Ske)◆"
          }else{
            displayedText = "&b&l◆ [封] Timer :" + huuinGimicTImer + " | #5/7:1200 (Ske)◆"
          }
        }else{
          if (huuinGimicTImer < 1441) {
            if (huuinGimicTImer >= 1431) {
              displayedText = "&4&l◆ [封] Timer :" + huuinGimicTImer + " | #6/7:1440 (Spi)◆"
            }else{
              displayedText = "&b&l◆ [封] Timer :" + huuinGimicTImer + " | #6/7:1440 (Spi)◆"
            }
          }else{
            if (huuinGimicTImer < 1501) {
              if (huuinGimicTImer >= 1491) {
                displayedText = "&4&l◆ [封] Timer :" + huuinGimicTImer + " | #7/7:1500 (DEATH)◆"
              }else{
                displayedText = "&b&l◆ [封] Timer :" + huuinGimicTImer + " | #7/7:1500 (DEATH)◆"
              }
            }
          }
        }
      }
    }
  }
}
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+25)
})

// Tokoyami Number Detection


let lastTitle = ""
let currentTitle = ""
let numSum = 0
let numAns = 0
let countTitleChanged = 0
let goChat = 0

// <ここにタイトル代入を記入>

register("step", () => {

  if (currentTitle == "I" && lastTitle != "I") {
    numSum = numSum + 1
    countTitleChanged++
  }
  if (currentTitle == "II" && lastTitle != "II") {
    numSum = numSum + 2
    countTitleChanged++
  }
  if (currentTitle == "III" && lastTitle != "III") {
   numSum = numSum + 3
    countTitleChanged++
  }
  if (currentTitle == "IV" && lastTitle != "IV") {
    numSum = numSum + 4
    countTitleChanged++
  }
  if (currentTitle == "V" && lastTitle != "V") {
    numSum = numSum + 5
    countTitleChanged++
  }
  if (currentTitle == "VI" && lastTitle != "VI") {
    numSum = numSum + 6
    countTitleChanged++
  }
  if (currentTitle == "VII" && lastTitle != "VII") {
    numSum = numSum + 7
    countTitleChanged++
  }
  if (currentTitle == "VIII" && lastTitle != "VIII") {
    numSum = numSum + 8
    countTitleChanged++
  }
  if (currentTitle == "IX" && lastTitle != "IX") {
    numSum = numSum + 9
    countTitleChanged++
  }
  if (currentTitle == "X" && lastTitle != "X") {
    numSum = numSum + 10
    countTitleChanged++
  }
  if (currentTitle == "XI" && lastTitle != "XI") {
    numSum = numSum + 11
    countTitleChanged++
  }
  if (currentTitle == "XII" && lastTitle != "XII") {
    numSum = numSum + 12
    countTitleChanged++
  }

  if (countTitleChanged == 13) {
    goChat = 66
    countTitleChanged = 0
    numAns = 78 - numSum
  }

  if (goChat > 0) {
    goChat--
  }

  lastTitle = currentTitle
}).setDelay(0.2)

register("renderOverlay", () => {
  if (goChat <= 0) return
  if (goChat > 0) {
  displayedText = "&b&l[闇] Ans : <" + numAns + "> "
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+45)
  }
})