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
  displayedText = "&n&l&d[ &cThe&6low&e+ &av&20.8.0 &7by &bSuratin&d ]"
  Renderer.drawString(displayedText, 10, 15)
})

var toggleBskTimer = new Boolean();
var toggleAwaTimer = new Boolean();
var toggleSakaiNdTimer = new Boolean();
var toggleSakaiHeadGlassTimer = new Boolean();
var toggleSakaiSkillBlock = new Boolean();
var toggleYami2v2NTimer = new Boolean();
var toggleAutoGg = new Boolean();
var toggleXenTimer = new Boolean();
var toggleHuuinGimicTimer = new Boolean();
var toggleTokoyamiNumberDetection = new Boolean();
var toggleWhite1TpTimer = new Boolean();
var toggleWhiteCtTimer = new Boolean();

TriggerRegister.registerCommand("openSettingsGUI").setComandName("/suraneko");

function openSettingsGUI(commandData){
  configBskTimer.open(commandData);
}

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

let sakaiHeadGlassTimer = -1

register("chat", () => { sakaiHeadGlassTimer = 35 }).setCriteria("${*}リィは使えない。全力で逃げろ！${*}")


register("step", () => {
  if (sakaiHeadGlassTimer > -1) {
    sakaiHeadGlassTimer--
	World.playSound("mob.wither.shoot", 250, 1.7);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (sakaiHeadGlassTimer === -1) return
  displayedText = "&a&l⚡ [砂]Purple Thunder : " + sakaiHeadGlassTimer + " ⚡"
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
  displayedText = "&b&lX [砂]no Parii : " + sakaiSkillBlock + " X"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+50)
})


//常闇N 2v2タイマー

let yami2v2NTimer = -1
let warn2v2Failing = 0

register("chat", () => { yami2v2NTimer = 65 }).setCriteria("${*}九の刻${*}")


register("step", () => {
  if (yami2v2NTimer > -1) {
    yami2v2NTimer--
	if (yami2v2NTimer > 10) {
		World.playSound("random.break", 300, 1);
	}else{
		World.playSound("random.anvil_land", 300, 1);
	}
	if (yami2v2NTimer == 10) {
		warn2v2Failing = 1
	}
	
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (yami2v2NTimer === -1) return
  
  displayedText = "&d&l⚔ [闇]2v2 :" + yami2v2NTimer + " (T:-5s) ⚔"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+25)
	
  if (warn2v2Failing == 1) {
	  warn2v2Failing = 0
	  ChatLib.say("常闇 2v2デバフ注意 残り約10秒 (Tの場合5秒)")
  }
})

register("chat", () => { yami2v2NTimer = -1 }).setCriteria("${*}地下からの脱出に成功した${*}")

//autogg when
register("chat", () => { ChatLib.say("gg") }).setCriteria("${*}ドロップしました${*}")


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

let titleNums = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];

register("step", () => {
  
  currentTitle = RenderTitle();
  ChatLib.chat(currentTitle)

  nums.forEach((titleNums, i) => {
    if (titleNums == currentTitle) {
        numSum += i + 1;
        countTitleChanged++    
        ChatLib.chat(numSum)
    }
  });

  if (countTitleChanged == 11) {
    //goChat = 66
    countTitleChanged = 0
    numAns = 78 - numSum
  }
  ChatLib.chat(nums[numAns - 1])
  lastTitle = currentTitle
})

/* register("renderOverlay", () => {
  if (goChat <= 0) return
  if (goChat > 0) {
  displayedText = "&b&l[闇] Ans : <" + numAns + "> "
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+45)
  }
}) */

// 純白1tpTimer

let white1TpTimer = -1

register("chat", () => { white1TpTimer = 63 }).setCriteria("${*}人1人追いつめてくよ${*}")


register("step", () => {
  if (white1TpTimer > -1) {
    white1TpTimer--
	World.playSound("mob.blaze.hit", 175, 1);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (white1TpTimer === -1) return
  displayedText = "&8[白] 1TP : " + white1TpTimer + "s"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+20)
})

// 純白ctTimerP1
// リィ・恵みの泉・アイススタンプ

let whiteCtTimerP1 = -1

register("chat", () => { whiteCtTimerP1 = 60 }).setCriteria("${*}リィ・恵みの泉・アイススタンプ${*}")


register("step", () => {
  if (whiteCtTimerP1 > -1) {
    whiteCtTimerP1--
	World.playSound("mob.blaze.hit", 175, 1);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (whiteCtTimerP1 === -1) return
  displayedText = "&8[白] パ/泉/アイス/才ct : &6" + whiteCtTimerP1 + "&8s"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+30)
})

// 純白ctTimerP2
// ーバーシュート・ステッドショック

let whiteCtTimerP2 = -1

register("chat", () => { whiteCtTimerP2 = 60 }).setCriteria("${*}ーバーシュート・ステッドショック${*}")


register("step", () => {
  if (whiteCtTimerP2 > -1) {
    whiteCtTimerP2--
	World.playSound("mob.blaze.hit", 175, 1);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (whiteCtTimerP2 === -1) return
  displayedText = "&8[白] 旗Ult ct : &6" + whiteCtTimerP2 + "&8s"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+40)
})

// 純白ctTimerP3
// 醒・天下無双・

let whiteCtTimerP3 = -1

register("chat", () => { whiteCtTimerP3 = 60 }).setCriteria("${*}醒・天下無双・${*}")


register("step", () => {
  if (whiteCtTimerP3 > -1) {
    whiteCtTimerP3--
	World.playSound("mob.blaze.hit", 175, 1);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (whiteCtTimerP3 === -1) return
  displayedText = "&8[白] 覚醒/天下/斬撃/激昂/百花ct : &6" + whiteCtTimerP3 + "&8s"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+50)
})

// 純白ctTimerP4
// 醒・天下無双・

let whiteCtTimerP4 = -1

register("chat", () => { whiteCtTimerP4 = 60 }).setCriteria("${*}テオストライク・ファイアボル${*}")


register("step", () => {
  if (whiteCtTimerP4 > -1) {
    whiteCtTimerP4--
	World.playSound("mob.blaze.hit", 175, 1);
  }
}).setDelay(1)

register("renderOverlay", () => {
  if (whiteCtTimerP4 === -1) return
  displayedText = "&8[白] メテ/ボル/ブリ/グラct : &6" + whiteCtTimerP4 + "&8s"
  Renderer.drawString(displayedText, Renderer.screen.getWidth()/2 - Renderer.getStringWidth(displayedText)/2, Renderer.screen.getHeight()/2+60)
})

//autoax3
register("chat", () => { ChatLib.say("[TL+] Start 4th floor Puzzle!") }).setCriteria("${*}あ～～～...${*}")

//autoNoticeSpiderSpawn
register("chat", () => { ChatLib.say("[TL+] Spdier Boss Spawned!") }).setCriteria("${*}のモンスターが存在する間${*}")

//流星が襲い掛かる...同じ場所に固まるのは
//ryuuseipariiwarn
register("chat", () => { 
if (sakaiSkillBlock > 0){
	sayText = "[TL+] Warning : パリィ封印残り" + sakaiSkillBlock + "秒"
	ChatLib.say(sayText)
}
	}).setCriteria("${*}流星が襲い掛かる...同じ場所に固まるのは${*}")
/*
TriggerRegister.registerCommand(glistShowall).setName("gls");
function glistShowall {
	ChatLib.command("glist showall");
}
*/