import net from "net"
import logger from "../../util/logger"
import { GetConfigReq, GetConfigRsp, GetConfigRsp_CmdId, GetConfigRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import getTs from "../../util/getTs"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetConfigReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, GetConfigRsp_CmdId.CMD_ID, {
        retcode: GetConfigRsp_Retcode.SUCC,
        staminaRecoverConfigTime: 360,
        avatarReviveHcoinCost: 60,
        sameTypePowerUpRate: 120,
        dayTimeOffset: 14400,
        serverCurTime: 1673232737,
        powerUpScoinCostRate: 50,
        maxFriendNum: 148,
        avatarMaxAddGoodfeel: 1000,
        disjoinEquipmentBackExpPercent: 25,
        gachaTicketList: [
            {
                materialId: 916,
                hcoinCost: 10
            },
            {
                materialId: 1102,
                hcoinCost: 280
            },
            {
                materialId: 1103,
                hcoinCost: 280
            },
            {
                materialId: 1104,
                hcoinCost: 280
            },
            {
                materialId: 1106,
                hcoinCost: 60
            },
            {
                materialId: 1108,
                hcoinCost: 280
            },
            {
                materialId: 1109,
                hcoinCost: 150
            },
            {
                materialId: 1110,
                hcoinCost: 200
            },
            {
                materialId: 1111,
                hcoinCost: 200
            },
            {
                materialId: 1112,
                hcoinCost: 120
            },
            {
                materialId: 1115,
                hcoinCost: 280
            },
            {
                materialId: 7335,
                hcoinCost: 100
            },
            {
                materialId: 7454,
                hcoinCost: 10
            },
            {
                materialId: 7848,
                hcoinCost: 10
            },
            {
                materialId: 114045,
                hcoinCost: 200
            },
            {
                materialId: 114076,
                hcoinCost: 8
            },
            {
                materialId: 114214,
                hcoinCost: 10
            },
            {
                materialId: 114312,
                hcoinCost: 10
            },
            {
                materialId: 114328,
                hcoinCost: 8
            },
            {
                materialId: 114663,
                hcoinCost: 10
            },
            {
                materialId: 114667,
                hcoinCost: 8
            },
            {
                materialId: 114689,
                hcoinCost: 10
            },
            {
                materialId: 115108,
                hcoinCost: 10
            },
            {
                materialId: 115113,
                hcoinCost: 10
            },
            {
                materialId: 115130,
                hcoinCost: 10
            },
            {
                materialId: 115167,
                hcoinCost: 8
            },
            {
                materialId: 115170,
                hcoinCost: 8
            },
            {
                materialId: 116124,
                hcoinCost: 10
            },
            {
                materialId: 119108,
                hcoinCost: 8
            },
            {
                materialId: 121033,
                hcoinCost: 10
            },
            {
                materialId: 121041,
                hcoinCost: 10
            },
            {
                materialId: 121042,
                hcoinCost: 10
            },
            {
                materialId: 121294,
                hcoinCost: 10
            },
            {
                materialId: 121298,
                hcoinCost: 10
            },
            {
                materialId: 125202,
                hcoinCost: 10
            },
            {
                materialId: 1061660,
                hcoinCost: 100
            }
        ],
        regionName: "overseas01",
        minInviteLevel: 26,
        islandEventRefreshInterval: 120,
        spaceshipBeginTime: 1599184800,
        spaceshipEndTime: 1599444000,
        spaceshipId: 2,
        scoinLimit: 999999999,
        friendsPointLimit: 500000000,
        weekDayActivityCoinItemId: 7034,
        islandVisitMaxHelpNum: 5,
        costSeniorEquipAfterCancelProtectMinTimeDiff: 86400,
        rogueStageCostItemId: 9008,
        rogueStageMaxProgress: 999,
        bulletinActivityList: [
            {
                activityId: 4378,
                activityType: 2,
                beginTime: 1574842500,
                endTime: 2079764100,
                bulletinId: 0,
                typeParamList: [
                    24
                ],
                typeParamStr: "0",
                minPlayerLevel: 15,
                maxPlayerLevel: 99,
                titleName: "DLC_Boxgacha_Title",
                titleImage: "SpriteOutput/ShopTabIcons/IconShopGacha",
                imagePath: "event/Immediately/ActivityPage/3.5SPhuntinggacha_banner_truecolor",
                linkButton: "",
                description: "3.5SPhuntinggacha_Des",
                weight: 334,
                backgroundPath: "event/Immediately/ActivityPage/3.5SPhunting_bg_truecolor",
                textImagePath: "event/Immediately/ActivityPage/3.5SPhuntinggacha_title_truecolor",
                unlockParamStr: ""
            },
            {
                activityId: 5167,
                activityType: 46,
                beginTime: 1641866400,
                endTime: 2274379199,
                bulletinId: 0,
                typeParamStr: "0",
                minPlayerLevel: 80,
                "maxPlayerLevel": 99,
                "titleName": "5.6TUPO_title",
                "titleImage": "SpriteOutput/BP/5.6_TuPo_Tab",
                "imagePath": "",
                "linkButton": "",
                "description": "5.6TUPO_des",
                "weight": 700,
                "backgroundPath": "",
                "textImagePath": "",
                "unlockParamStr": ""
            },
            {
                activityId: 5175,
                activityType: 2,
                beginTime: 1642032000,
                endTime: 2053540799,
                bulletinId: 0,
                typeParamList: [
                    35
                ],
                typeParamStr: "0",
                minPlayerLevel: 25,
                "maxPlayerLevel": 99,
                "titleName": "5.4dlcgacha_title",
                "titleImage": "SpriteOutput/ShopTabIcons/IconShopGacha",
                "imagePath": "event/Immediately/ActivityPage/5.4_DLC2gacha_banner_truecolor",
                "linkButton": "",
                "description": "5.4dlcgacha_Des",
                "weight": 898,
                "backgroundPath": "event/Immediately/ActivityPage/5.4_DLC2gacha_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/5.4_DLC2gacha_title_truecolor",
                "unlockParamStr": ""
            },
            {
                activityId: 5401,
                activityType: 3,
                beginTime: 1670788800,
                endTime: 1673812799,
                bulletinId: 0,
                typeParamList: [
                    57
                ],
                typeParamStr: "0",
                minPlayerLevel: 10,
                "maxPlayerLevel": 99,
                "titleName": "5.6BPShop_Title",
                "titleImage": "event/Immediately/BP/const_ShopTab04_truecolor",
                "imagePath": "event/Immediately/BP/Shop/const_62_ShopBanner",
                "linkButton": "",
                "description": "",
                "weight": 1226,
                "backgroundPath": "event/Immediately/BP/Shop/const_62_ShopBG",
                "textImagePath": "event/Immediately/BP/Shop/const_62_ShopTitle",
                "currencyList": [
                    973971
                ],
                "unlockParamStr": ""
            },
            {
                activityId: 5404,
                activityType: 44,
                beginTime: 1670443200,
                endTime: 1673467199,
                bulletinId: 0,
                typeParamList: [
                    85226,
                    85227,
                    85228,
                    85229,
                    85230
                ],
                typeParamStr: "98",
                minPlayerLevel: 20,
                "maxPlayerLevel": 99,
                "titleName": "6.2DataSet_title",
                "titleImage": "event/Immediately/ActivityPage/6.2_MainGift_tab_truecolor",
                "imagePath": "",
                "linkButton": "",
                "description": "6.2DataSet_Des",
                "weight": 1500,
                "backgroundPath": "event/Immediately/ActivityPage/6.2_MainGift_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.2_MainGift_title_truecolor",
                "currencyList": [
                    114750
                ],
                "unlockParamStr": ""
            },
            {
                activityId: 5406,
                activityType: 4,
                beginTime: 1670443200,
                endTime: 1673467199,
                bulletinId: 0,
                typeParamList: [
                    672751,
                    672752,
                    672753,
                    672756,
                    672757,
                    672758,
                    672759,
                    672760,
                    672761,
                    672762,
                    672763,
                    672764,
                    672765,
                    672766,
                    672767,
                    672768,
                    672769,
                    672770,
                    672771,
                    672772,
                    672773,
                    672774,
                    672775,
                    672776,
                    672777,
                    672778,
                    672779,
                    672754,
                    672755
                ],
                typeParamStr: "0",
                minPlayerLevel: 25,
                "maxPlayerLevel": 99,
                "titleName": "6.2_AiCyber_Title",
                "titleImage": "event/Immediately/ActivityPage/6.2_AiCyber_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.2_AiCyber_banner_truecolor",
                "linkButton": "<type=\"143\" text=\"GO\"/>",
                "description": "6.2_AiCyber_Des",
                "weight": 1700,
                "backgroundPath": "event/Immediately/ActivityPage/6.2_AiCyber_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.2_AiCyber_title_truecolor",
                "unlockParamStr": ""
            },
            {
                activityId: 5407,
                activityType: 3,
                beginTime: 1670443200,
                endTime: 1674071999,
                bulletinId: 0,
                typeParamList: [
                    51
                ],
                typeParamStr: "0",
                minPlayerLevel: 25,
                "maxPlayerLevel": 99,
                "titleName": "6.2_AiCybershop_title",
                "titleImage": "event/Immediately/ActivityPage/6.2_AiCybershop_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.2_AiCybershop_banner_truecolor",
                "linkButton": "<type=\"143\" text=\"GO\"/>",
                "description": "6.2_AiCybershop_Des",
                "weight": 1699,
                "backgroundPath": "event/Immediately/ActivityPage/6.2_AiCybershop_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.2_AiCybershop_title_truecolor",
                "currencyList": [
                    121522
                ],
                "unlockParamStr": ""
            },
            {
                activityId: 5417,
                activityType: 4,
                beginTime: 1671415200,
                endTime: 1673467199,
                bulletinId: 0,
                typeParamList: [
                    672804,
                    672805,
                    672806,
                    672807,
                    672808,
                    672809,
                    672810,
                    672811,
                    672812,
                    672813,
                    672814,
                    672815,
                    672816,
                    672817
                ],
                typeParamStr: "0",
                minPlayerLevel: 30,
                "maxPlayerLevel": 99,
                "titleName": "6.2_MainOW_title",
                "titleImage": "event/Immediately/ActivityPage/6.2_MainOW_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.2_MainOW_banner_truecolor",
                "linkButton": "<type=\"1076|1001\" text=\"GO\"/>",
                "description": "6.2_MainOW_Des",
                "weight": 1900,
                "backgroundPath": "event/Immediately/ActivityPage/6.2_MainOW_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.2_MainOW_title_truecolor",
                "unlockParamStr": ""
            },
            {
                activityId: 5420,
                activityType: 4,
                beginTime: 1672279200,
                endTime: 1673467199,
                bulletinId: 0,
                typeParamList: [
                    672820
                ],
                typeParamStr: "1",
                minPlayerLevel: 30,
                "maxPlayerLevel": 99,
                "titleName": "6.2_MainOW1_title",
                "titleImage": "event/Immediately/ActivityPage/6.2_MainOW3_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.2_MainOW3_banner_truecolor",
                "linkButton": "<type=\"1076|1001\" text=\"GO\"/>",
                "description": "6.2_MainOW1_Des",
                "weight": 1901,
                "backgroundPath": "event/Immediately/ActivityPage/6.2_MainOW3_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.2_MainOW3_title_truecolor",
                "unlockParamStr": ""
            },
            {
                activityId: 5424,
                activityType: 49,
                beginTime: 1672624800,
                endTime: 1673467199,
                bulletinId: 0,
                typeParamList: [
                    1
                ],
                typeParamStr: "0",
                minPlayerLevel: 25,
                "maxPlayerLevel": 99,
                "titleName": "6.2_MiniMonopoly_Title",
                "titleImage": "event/Immediately/ActivityPage/6.2_MiniMonopoly_tab_truecolor",
                "imagePath": "",
                "linkButton": "",
                "description": "6.2_MiniMonopoly_Des",
                "weight": 2000,
                "backgroundPath": "event/Immediately/ActivityPage/6.2_MiniMonopoly_bg_truecolor",
                "textImagePath": "",
                "unlockParamStr": ""
            },
            {
                activityId: 5429,
                activityType: 4,
                beginTime: 1672624800,
                endTime: 1673467199,
                bulletinId: 0,
                typeParamList: [
                    672735,
                    672734,
                    672736,
                    672737,
                    672748,
                    672747,
                    672746,
                    672745,
                    672744,
                    672743,
                    672749,
                    672738,
                    672739,
                    672740,
                    672741,
                    672742
                ],
                typeParamStr: "0",
                minPlayerLevel: 25,
                "maxPlayerLevel": 99,
                "titleName": "6.2_MiniMonopolyMission_Title",
                "titleImage": "event/Immediately/ActivityPage/6.2_MiniMonopolyMission_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.2_MiniMonopolyMission_banner_truecolor",
                "linkButton": "<type=\"64|5424\" text=\"GO\"/>",
                "description": "6.2_MiniMonopolyMission_Des",
                "weight": 1999,
                "backgroundPath": "event/Immediately/ActivityPage/6.2_MiniMonopolyMission_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.2_MiniMonopolyMission_title_truecolor",
                "unlockParamStr": ""
            },
            {
                activityId: 5456,
                activityType: 4,
                beginTime: 1672977600,
                endTime: 1673812799,
                bulletinId: 0,
                typeParamList: [
                    86287
                ],
                typeParamStr: "5",
                minPlayerLevel: 20,
                "maxPlayerLevel": 99,
                "titleName": "6.2_ShowPage_title",
                "titleImage": "event/Immediately/ActivityPage/6.2_6.3_ShowPage_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.2_6.3_ShowPage_banner_truecolor",
                "linkButton": "<type=\"webview\" text=\"GO\" href=\"https://act.hoyoverse.com/puzzle/bh3/e20230106preview_687/index.html?game_biz=bh3_os&sign_type=2&authkey_ver=1&auth_appid=e20230106preview&win_mode=fullscreen\"/>",
                "description": "6.2_ShowPage_Des",
                "weight": 900,
                "backgroundPath": "event/Immediately/ActivityPage/6.2_6.3_ShowPage_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.2_6.3_ShowPage_title_truecolor",
                "unlockParamStr": ""
            },
            {
                activityId: 16286,
                activityType: 41,
                beginTime: 1670464800,
                endTime: 1673492400,
                bulletinId: 0,
                typeParamList: [
                    1063750,
                    1063751,
                    1063752,
                    1063753,
                    1063754,
                    1063755,
                    1063756
                ],
                typeParamStr: "0",
                minPlayerLevel: 15,
                "maxPlayerLevel": 99,
                "titleName": "5.1Recharge_title",
                "titleImage": "event/Immediately/ActivityPage/6.2_Recharge_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.2_recharge_banner_truecolor",
                "linkButton": "",
                "description": "5.0Recharge_Des",
                "weight": 1600,
                "backgroundPath": "event/Immediately/ActivityPage/6.2_Recharge_BG_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.2_Recharge_title_truecolor",
                "currencyList": [
                    3,
                    6
                ],
                "unlockParamStr": ""
            }
        ],
        "armadaDiscoveryRewardList": [
            {
                "discovery": 5000,
                "rewardId": 920001
            },
            {
                "discovery": 8000,
                "rewardId": 920002
            },
            {
                "discovery": 13000,
                "rewardId": 920003
            },
            {
                "discovery": 20000,
                "rewardId": 920004
            },
            {
                "discovery": 30000,
                "rewardId": 920005
            }
        ],
        "rogueStageOpenLevel": 20,
        "armadaBeginTime": 1496030400,
        "armadaEndTime": 1501876800,
        "armadaCustomContent": "ArmadaActivityBtn_Dec",
        "stigmataRuneOpenLevel": 1,
        "stigmataTitleOpenLevel": 60,
        "stigmataDisjoinTitleBackExpPercent": 50,
        "stigmataPromoteMaxTimes": 10,
        "stigmataRuneCombatRatio": 0,
        "stigmataDisjoinBackExpPercent": 25,
        "stigmataRefineValueBackPercent": 1,
        "stigmataTitleExpMaterialList": [
            8301,
            8302,
            8303,
            8304
        ],
        "scoinConvertPerExp": 54,
        "mpResetSkillHcoinCost": 30,
        "mpMemberMaxTimesForAllAct": 50,
        "mpMemberExhaustedDropRatio": 25,
        "friendBondLevelConfigList": [
            {
                "level": 0,
                "minBond": 0,
                "assistCdReduceRate": 0,
                "inviteAddFriendsPoint": 0,
                "extraAddMpExpRate": 0,
                "extraMpAddFriendsPoint": 0
            },
            {
                "level": 1,
                "minBond": 333,
                "assistCdReduceRate": 20,
                "inviteAddFriendsPoint": 3,
                "extraAddMpExpRate": 5,
                "extraMpAddFriendsPoint": 3
            },
            {
                "level": 2,
                "minBond": 666,
                "assistCdReduceRate": 40,
                "inviteAddFriendsPoint": 7,
                "extraAddMpExpRate": 10,
                "extraMpAddFriendsPoint": 7
            },
            {
                "level": 3,
                "minBond": 999,
                "assistCdReduceRate": 60,
                "inviteAddFriendsPoint": 10,
                "extraAddMpExpRate": 15,
                "extraMpAddFriendsPoint": 10
            }
        ],
        mpPunishMpExpReduceRate: 75,
        friendAssistantAddBond: 5,
        armadaManageMailLength: 100,
        armadaContactLength: 20,
        armadaManageMailCd: 3600,
        armadaBulletinLength: 140,
        trialAvatarPlayerMinLevel: 10,
        disjoinEquipmentMaxBatchNum: 50,
        equipDisjointUnlockLevel: 25,
        armadaBossStageOpenLevel: 30,
        antiCheatStageCheckConfig: {
            checkStageIdList: [
                146001,
                146002,
                146003,
                146004,
                146005,
                146006,
                146007,
                146008,
                146009,
                146010,
                146011,
                146012,
                146013,
                146014,
                146015,
                146016,
                146017,
                146018,
                146019,
                146020,
                146021,
                146022,
                146023,
                146024,
                146025,
                146026,
                146027,
                146028,
                146029,
                146030,
                146031,
                146032,
                146033,
                146034,
                146035,
                146036,
                146037,
                146038,
                146039,
                146040,
                146041,
                146042,
                146043,
                146044,
                146045,
                146046,
                146047,
                146048,
                146049,
                146050,
                146051,
                146052,
                146053,
                146054,
                146055,
                146056,
                146057,
                146058,
                146059,
                146060,
                146061,
                146062,
                146063,
                146064,
                146065,
                146066,
                146067,
                146068,
                146069,
                146070,
                146071,
                146072,
                146073,
                146074,
                146075,
                146076,
                146077,
                146078,
                146079,
                146080,
                146081,
                146082,
                146083,
                146084,
                146085,
                146086,
                146087,
                146088,
                146089,
                146090,
                146091,
                146092,
                146093,
                146094,
                146095,
                146096,
                146097,
                153001,
                153002,
                153003,
                153004,
                153005,
                153006,
                153007,
                153008,
                153009,
                153010,
                153011,
                153012,
                153013,
                153014,
                153015,
                153016,
                153017,
                153018,
                153019,
                153020,
                153021,
                153022,
                153023,
                153024,
                153025,
                153026,
                153027,
                153028,
                153029,
                153030,
                153031,
                153501,
                153502,
                153503,
                153504,
                153505,
                153506,
                153507,
                153508,
                153509,
                153510,
                153511,
                153512,
                153513,
                153514,
                153515,
                153516,
                153517,
                153518,
                900430,
                900501,
                155081,
                155101,
                155111,
                175620,
                175621,
                175622,
                175623,
                175624,
                175625,
                175626,
                175627,
                175628,
                175629,
                175630,
                175631,
                175632,
                175633,
                175634,
                175635,
                175636,
                175637,
                175638,
                175639,
                175640,
                175641,
                175642,
                175643,
                175644,
                175645,
                175646,
                175647,
                175648,
                175649,
                175650,
                175651,
                175652,
                175653,
                175654,
                175655,
                10302004,
                10302008,
                10302012,
                10302016,
                10302017,
                10302018,
                10302019,
                10302020,
                10302021,
                10302022,
                10302023
            ],
            "checkStageTypeList": [
                4,
                15,
                20,
                21,
                24,
                25,
                32,
                10,
                11,
                35,
                33,
                37,
                36
            ]
        },
        "isCanGalTouch": true,
        "isResistanceOpen": true,
        "nextDayBeginTime": 1673294400
    } as GetConfigRsp)
}

// GetConfigRsp split in multiple packets
// 08 bb ab 1d 10 ac ab 88 81 02 2a 02 08 00 08 00 10 e8 02 20 3c 28 78 30 c0 70 38 f4 c7 af 9d 06 40 32 48 94 01 60 e8 07 78 19 fa 01 05 08 94 07 10 0a fa 01 06 08 ce 08 10 98 02 fa 01 06 08 cf 08 10 98 02 fa 01 06 08 d0 08 10 98 02 fa 01 05 08 d2 08 10 3c fa 01 06 08 d4 08 10 98 02 fa 01 06 08 d5 08 10 96 01 fa 01 06 08 d6 08 10 c8 01 fa 01 06 08 d7 08 10 c8 01 fa 01 05 08 d8 08 10 78 fa 01 06 08 db 08 10 98 02 fa 01 05 08 a7 39 10 64 fa 01 05 08 9e 3a 10 0a fa 01 05 08 a8 3d 10 0a fa 01 07 08 fd fa 06 10 c8 01 fa 01 06 08 9c fb 06 10 08 fa 01 06 08 a6 fc 06 10 0a fa 01 06 08 88 fd 06 10 0a fa 01 06 08 98 fd 06 10 08 fa 01 06 08 e7 ff 06 10 0a fa 01 06 08 eb ff 06 10 08 fa 01 06 08 81 80 07 10 0a fa 01 06 08 a4 83 07 10 0a fa 01 06 08 a9 83 07 10 0a fa 01 06 08 ba 83 07 10 0a fa 01 06 08 df 83 07 10 08 fa 01 06 08 e2 83 07 10 08 fa 01 06 08 9c 8b 07 10 0a fa 01 06 08 c4 a2 07 10 08 fa 01 06 08 c9 b1 07 10 0a fa 01 06 08 d1 b1 07 10 0a fa 01 06 08 d2 b1 07 10 0a fa 01 06 08 ce b3 07 10 0a fa 01 06 08 d2 b3 07 10 0a fa 01 06 08 92 d2 07 10 0a fa 01 06 08 9c e6 40 10 64 82 02 0a 6f 76 65 72 73 65 61 73 30 31 88 02 1a 9a 02 13 08 02 10 50 18 c0 e1 c3 9c 06 20 c0 c4 b9 9d 06 28 81 19 9a 02 11 08 04 10 d8 04 18 c0 e1 c3 9c 06 20 c0 c4 b9 9d 06 a0 02 78 a8 02 a0 bf c6 fa 05 b0 02 a0 a8 d6 fa 05 b8 02 02 c8 02 ff 93 eb dc 03 d0 02 80 ca b5 ee 01 e8 02 fa 36 f0 02 05 f8 02 80 a3 05 80 03 b0 46 88 03 e7 07 92 03 bb 02 08 9a 22 10 02 18 84 e1 f8 ee 05 20 84 dd da df 07 28 00 38 18 42 01 30 48 0f 50 63 62 12 44 4c 43 5f 42 6f 78 67 61 63 68 61 5f 54 69 74 6c 65 6a 27 53 70 72 69 74 65 4f 75 74 70 75 74 2f 53 68 6f 70 54 61 62 49 63 6f 6e 73 2f 49 63 6f 6e 53 68 6f 70 47 61 63 68 61 72 41 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 33 2e 35 53 50 68 75 6e 74 69 6e 67 67 61 63 68 61 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 00 82 01 15 33 2e 35 53 50 68 75 6e 74 69 6e 67 67 61 63 68 61 5f 44 65 73 88 01 ce 02 92 01 38 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 33 2e 35 53 50 68 75 6e 74 69 6e 67 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 40 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 33 2e 35 53 50 68 75 6e 74 69 6e 67 67 61 63 68 61 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 66 08 af 28 10 2e 18 a0 c9 f3 8e 06 20 bf 8b c1 bc 08 28 00 42 01 30 48 50 50 63 62 0d 35 2e 36 54 55 50 4f 5f 74 69 74 6c 65 6a 1c 53 70 72 69 74 65 4f 75 74 70 75 74 2f 42 50 2f 35 2e 36 5f 54 75 50 6f 5f 54 61 62 72 00 7a 00 82 01 0b 35 2e 36 54 55 50 4f 5f 64 65 73 88 01 bc 05 92 01 00 9a 01 00 aa 01 00 92 03 ad 02 08 b7 28 10 02 18 80 d7 fd 8e 06 20 bf 97 9a d3 07 28 00 38 23 42 01 30 48 19 50 63 62 11 35 2e 34 64 6c 63 67 61 63 68 61 5f 74 69 74 6c 65 6a 27 53 70 72 69 74 65 4f 75 74 70 75 74 2f 53 68 6f 70 54 61 62 49 63 6f 6e 73 2f 49 63 6f 6e 53 68 6f 70 47 61 63 68 61 72 3d 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 35 2e 34 5f 44 4c 43 32 67 61 63 68 61 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 00 82 01 0f 35 2e 34 64 6c 63 67 61 63 68 61 5f 44 65 73 88 01 82 07 92 01 39 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 35 2e 34 5f 44 4c 43 32 67 61 63 68 61 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3c 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 35 2e 34 5f 44 4c 43 32 67 61 63 68 61 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 e2 02 08 98 2a 10 04 18 c0 da ef 9c 06 20 c0 c4 b9 9d 06 28 00 38 dd 87 29 42 01 34 48 14 50 63 62 13 35 2e 33 74 69 6d 65 72 75 6e 6e 65 72 5f 74 69 74 6c 65 6a 3b 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 74 69 6d 65 72 75 6e 6e 65 72 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3e 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 74 69 6d 65 72 75 6e 6e 65 72 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 18 3c 74 79 70 65 3d 22 37 7c 31 34 22 20 74 65 78 74 3d 22 47 4f 22 2f 3e 82 01 11 35 2e 33 74 69 6d 65 72 75 6e 6e 65 72 5f 64 65 73 88 01 f7 0a 92 01 3a 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 74 69 6d 65 72 75 6e 6e 65 72 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3d 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 74 69 6d 65 72 75 6e 6e 65 72 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 f8 01 08 99 2a 10 03 18 c0 ed d8 9c 06 20 bf b6 91 9e 06 28 00 38 39 42 01 30 48 0a 50 63 62 0f 35 2e 36 42 50 53 68 6f 70 5f 54 69 74 6c 65 6a 2e 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 42 50 2f 63 6f 6e 73 74 5f 53 68 6f 70 54 61 62 30 34 5f 74 72 75 65 63 6f 6c 6f 72 72 2d 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 42 50 2f 53 68 6f 70 2f 63 6f 6e 73 74 5f 36 32 5f 53 68 6f 70 42 61 6e 6e 65 72 7a 00 82 01 00 88 01 ca 09 92 01 29 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 42 50 2f 53 68 6f 70 2f 63 6f 6e 73 74 5f 36 32 5f 53 68 6f 70 42 47 9a 01 2c 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 42 50 2f 53 68 6f 70 2f 63 6f 6e 73 74 5f 36 32 5f 53 68 6f 70 54 69 74 6c 65 a0 01 93 b9 3b aa 01 00 92 03 96 02 08 9c 2a 10 2c 18 c0 e1 c3 9c 06 20 bf aa fc 9d 06 28 00 38 ea 99 05 38 eb 99 05 38 ec 99 05 38 ed 99 05 38 ee 99 05 42 02 39 38 48 14 50 63 62 10 36 2e 32 44 61 74 61 53 65 74 5f 74 69 74 6c 65 6a 39 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 47 69 66 74 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 00 7a 00 82 01 0e 36 2e 32 44 61 74 61 53 65 74 5f 44 65 73 88 01 dc 0b 92 01 38 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 47 69 66 74 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3b 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 47 69 66 74 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 a0 01 be 80 07 aa 01 00 92 03 c1 03 08 9e 2a 10 04 18 c0 e1 c3 9c 06 20 bf aa fc 9d 06 28 00 38 ef 87 29 38 f0 87 29 38 f1 87 29 38 f4 87 29 38 f5 87 29 38 f6 87 29 38 f7 87 29 38 f8 87 29 38 f9 87 29 38 fa 87 29 38 fb 87 29 38 fc 87 29 38 fd 87 29 38 fe 87 29 38 ff 87 29 38 80 88 29 38 81 88 29 38 82 88 29 38 83 88 29 38 84 88 29 38 85 88 29 38 86 88 29 38 87 88 29 38 88 88 29 38 89 88 29 38 8a 88 29 38 8b 88 29 38 f2 87 29 38 f3 87 29 42 01 30 48 19 50 63 62 11 36 2e 32 5f 41 69 43 79 62 65 72 5f 54 69 74 6c 65 6a 38 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 41 69 43 79 62 65 72 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3b 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 41 69 43 79 62 65 72 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 17 3c 74 79 70 65 3d 22 31 34 33 22 20 74 65 78 74 3d 22 47 4f 22 2f 3e 82 01 0f 36 2e 32 5f 41 69 43 79 62 65 72 5f 44 65 73 88 01 a4 0d 92 01 37 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 41 69 43 79 62 65 72 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3a 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 41 69 43 79 62 65 72 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 ec 02 08 9f 2a 10 03 18 c0 e1 c3 9c 06 20 bf 9f a1 9e 06 28 00 38 33 42 01 30 48 19 50 63 62 15 36 2e 32 5f 41 69 43 79 62 65 72 73 68 6f 70 5f 74 69 74 6c 65 6a 3c 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 41 69 43 79 62 65 72 73 68 6f 70 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3f 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 41 69 43 79 62 65 72 73 68 6f 70 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 17 3c 74 79 70 65 3d 22 31 34 33 22 20 74 65 78 74 3d 22 47 4f 22 2f 3e 82 01 13 36 2e 32 5f 41 69 43 79 62 65 72 73 68 6f 70 5f 44 65 73 88 01 a3 0d 92 01 3b 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 41 69 43 79 62 65 72 73 68 6f 70 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3e 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 41 69 43 79 62 65 72 73 68 6f 70 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 a0 01 b2 b5 07 aa 01 00 92 03 85 03 08 a9 2a 10 04 18 a0 8b ff 9c 06 20 bf aa fc 9d 06 28 00 38 a4 88 29 38 a5 88 29 38 a6 88 29 38 a7 88 29 38 a8 88 29 38 a9 88 29 38 aa 88 29 38 ab 88 29 38 ac 88 29 38 ad 88 29 38 ae 88 29 38 af 88 29 38 b0 88 29 38 b1 88 29 42 01 30 48 1e 50 63 62 10 36 2e 32 5f 4d 61 69 6e 4f 57 5f 74 69 74 6c 65 6a 37 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3a 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 1d 3c 74 79 70 65 3d 22 31 30 37 36 7c 31 30 30 31 22 20 74 65 78 74 3d 22 47 4f 22 2f 3e 82 01 0e 36 2e 32 5f 4d 61 69 6e 4f 57 5f 44 65 73 88 01 ec 0e 92 01 36 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 39 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 d7 02 08 ab 2a 10 04 18 a0 f4 8e 9d 06 20 9f e9 b3 9d 06 28 00 38 b3 88 29 42 01 31 48 1e 50 63 62 11 36 2e 32 5f 4d 61 69 6e 4f 57 31 5f 74 69 74 6c 65 6a 38 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 32 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3b 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 32 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 1d 3c 74 79 70 65 3d 22 31 30 37 36 7c 31 30 30 31 22 20 74 65 78 74 3d 22 47 4f 22 2f 3e 82 01 0f 36 2e 32 5f 4d 61 69 6e 4f 57 31 5f 44 65 73 88 01 ed 0e 92 01 37 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 32 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3a 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 32 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 d7 02 08 ac 2a 10 04 18 a0 e9 b3 9d 06 20 bf aa fc 9d 06 28 00 38 b4 88 29 42 01 31 48 1e 50 63 62 11 36 2e 32 5f 4d 61 69 6e 4f 57 31 5f 74 69 74 6c 65 6a 38 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 33 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3b 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 33 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 1d 3c 74 79 70 65 3d 22 31 30 37 36 7c 31 30 30 31 22 20 74 65 78 74 3d 22 47 4f 22 2f 3e 82 01 0f 36 2e 32 5f 4d 61 69 6e 4f 57 31 5f 44 65 73 88 01 ed 0e 92 01 37 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 33 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3a 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 61 69 6e 4f 57 33 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 92 03 08 ad 2a 10 04 18 c0 e1 c3 9c 06 20 bf c4 b9 9d 06 28 00 38 ed ad 05 38 ee ad 05 38 ef ad 05 38 f0 ad 05 38 f1 ad 05 38 f2 ad 05 38 f3 ad 05 38 f4 ad 05 38 df f6 40 38 eb ad 05 38 ec ad 05 42 01 30 48 0f 50 63 62 13 36 2e 32 5f 43 68 61 72 61 63 74 65 72 5f 74 69 74 6c 65 6a 3e 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 68 61 72 61 63 74 65 72 53 68 6f 77 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3d 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 68 61 72 61 63 74 65 72 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 20 3c 74 79 70 65 3d 22 36 33 7c 34 30 30 30 30 31 37 35 22 20 74 65 78 74 3d 22 47 4f 22 20 2f 3e 82 01 11 36 2e 32 5f 43 68 61 72 61 63 74 65 72 5f 64 65 73 88 01 b0 09 92 01 39 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 68 61 72 61 63 74 65 72 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3c 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 68 61 72 61 63 74 65 72 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 f1 02 08 af 2a 10 04 18 c0 e1 c3 9c 06 20 bf c4 b9 9d 06 28 00 38 f6 ad 05 38 f7 ad 05 38 f8 ad 05 38 f9 ad 05 38 fa ad 05 42 01 30 48 32 50 63 62 12 36 2e 32 5f 45 58 57 65 61 70 6f 6e 5f 74 69 74 6c 65 6a 39 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 45 58 57 65 61 70 6f 6e 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3c 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 45 58 57 65 61 70 6f 6e 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 20 3c 74 79 70 65 3d 22 36 33 7c 34 30 30 30 30 31 37 35 22 20 74 65 78 74 3d 22 47 4f 22 20 2f 3e 82 01 10 36 2e 32 5f 45 58 57 65 61 70 6f 6e 5f 44 65 73 88 01 cc 08 92 01 38 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 45 58 57 65 61 70 6f 6e 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3c 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 45 58 57 65 61 70 6f 6e 5f 74 69 74 69 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 d7 01 08 b0 2a 10 31 18 a0 f5 c8 9d 06 20 bf aa fc 9d 06 28 00 38 01 42 01 30 48 19 50 63 62 16 36 2e 32 5f 4d 69 6e 69 4d 6f 6e 6f 70 6f 6c 79 5f 54 69 74 6c 65 6a 3d 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 69 6e 69 4d 6f 6e 6f 70 6f 6c 79 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 00 7a 00 82 01 14 36 2e 32 5f 4d 69 6e 69 4d 6f 6e 6f 70 6f 6c 79 5f 44 65 73 88 01 d0 0f 92 01 3c 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 69 6e 69 4d 6f 6e 6f 70 6f 6c 79 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 00 aa 01 00 92 03 99 03 08 b1 2a 10 04 18 a0 80 a4 9d 06 20 c0 c1 ec 9d 06 28 00 38 b5 88 29 38 b6 88 29 38 b7 88 29 38 b8 88 29 38 b9 88 29 38 ba 88 29 38 bb 88 29 38 bc 88 29 38 bd 88 29 38 be 88 29 38 bf 88 29 38 c0 88 29 38 c1 88 29 38 c2 88 29 38 c3 88 29 38 c4 88 29 38 c5 88 29 42 01 30 48 32 50 63 62 12 36 2e 32 5f 57 61 76 65 52 75 73 68 5f 74 69 74 6c 65 6a 39 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 57 61 76 65 52 75 73 68 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3c 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 57 61 76 65 52 75 73 68 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 19 3c 74 79 70 65 3d 22 31 34 32 7c 30 22 20 74 65 78 74 3d 22 47 4f 22 2f 3e 82 01 10 36 2e 32 5f 57 61 76 65 52 75 73 68 5f 44 65 73 88 01 88 0e 92 01 38 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 57 61 76 65 52 75 73 68 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3b 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 57 61 76 65 52 75 73 68 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 df 02 08 b2 2a 10 03 18 c0 cf 94 9d 06 20 c0 b9 de 9d 06 28 00 38 20 42 01 30 48 14 50 63 62 11 33 2e 33 74 69 6d 65 73 68 6f 70 5f 74 69 74 6c 65 6a 39 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 54 69 6d 65 53 68 6f 70 5f 54 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3c 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 54 69 6d 65 53 68 6f 70 5f 42 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 18 3c 74 79 70 65 3d 22 39 31 7c 35 22 20 74 65 78 74 3d 22 47 4f 22 2f 3e 82 01 0f 33 2e 33 74 69 6d 65 73 68 6f 70 5f 44 65 73 88 01 a0 06 92 01 38 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 54 69 6d 65 53 68 6f 70 5f 42 47 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3b 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 54 69 6d 65 53 68 6f 70 5f 54 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 a0 01 05 a0 01 af 3a a0 01 f4 37 aa 01 00 92 03 e4 02 08 b4 2a 10 04 18 c0 e1 c3 9c 06 20 bf c4 b9 9d 06 28 00 38 d7 f1 05 42 01 34 48 14 50 63 62 14 36 2e 32 5f 44 72 65 73 73 5f 52 69 74 61 5f 74 69 74 6c 65 6a 3b 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 44 72 65 73 73 5f 52 69 74 61 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3e 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 44 72 65 73 73 5f 52 69 74 61 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 18 3c 74 79 70 65 3d 22 39 31 7c 35 22 20 74 65 78 74 3d 22 47 4f 22 2f 3e 82 01 12 36 2e 32 5f 44 72 65 73 73 5f 52 69 74 61 5f 64 65 73 88 01 f8 0a 92 01 3a 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 44 72 65 73 73 5f 52 69 74 61 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3d 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 44 72 65 73 73 5f 52 69 74 61 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 d9 03 08 b5 2a 10 04 18 a0 f5 c8 9d 06 20 bf aa fc 9d 06 28 00 38 df 87 29 38 de 87 29 38 e0 87 29 38 e1 87 29 38 ec 87 29 38 eb 87 29 38 ea 87 29 38 e9 87 29 38 e8 87 29 38 e7 87 29 38 ed 87 29 38 e2 87 29 38 e3 87 29 38 e4 87 29 38 e5 87 29 38 e6 87 29 42 01 30 48 19 50 63 62 1d 36 2e 32 5f 4d 69 6e 69 4d 6f 6e 6f 70 6f 6c 79 4d 69 73 73 69 6f 6e 5f 54 69 74 6c 65 6a 44 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 69 6e 69 4d 6f 6e 6f 70 6f 6c 79 4d 69 73 73 69 6f 6e 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 47 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 69 6e 69 4d 6f 6e 6f 70 6f 6c 79 4d 69 73 73 69 6f 6e 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 1b 3c 74 79 70 65 3d 22 36 34 7c 35 34 32 34 22 20 74 65 78 74 3d 22 47 4f 22 2f 3e 82 01 1b 36 2e 32 5f 4d 69 6e 69 4d 6f 6e 6f 70 6f 6c 79 4d 69 73 73 69 6f 6e 5f 44 65 73 88 01 cf 0f 92 01 43 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 69 6e 69 4d 6f 6e 6f 70 6f 6c 79 4d 69 73 73 69 6f 6e 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 46 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 4d 69 6e 69 4d 6f 6e 6f 70 6f 6c 79 4d 69 73 73 69 6f 6e 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 ae 03 08 c6 2a 10 04 18 a0 97 94 9d 06 20 bf cc c7 9d 06 28 00 38 a8 a2 29 38 d0 88 29 38 d1 88 29 38 d2 88 29 38 d3 88 29 38 d4 88 29 38 d5 88 29 38 d6 88 29 38 d7 88 29 38 d8 88 29 38 d9 88 29 38 da 88 29 38 db 88 29 38 dc 88 29 38 e5 a1 29 38 dd 88 29 38 de 88 29 38 df 88 29 38 e0 88 29 38 e1 88 29 38 e2 88 29 38 e3 88 29 38 e4 88 29 38 e5 88 29 42 01 30 48 14 50 63 62 11 36 2e 33 5f 43 61 62 62 61 67 65 5f 74 69 74 6c 65 6a 38 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 61 62 62 61 67 65 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3b 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 61 62 62 61 67 65 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 18 3c 74 79 70 65 3d 22 31 30 31 33 22 20 74 65 78 74 3d 22 47 4f 22 2f 3e 82 01 0f 36 2e 33 5f 43 61 62 62 61 67 65 5f 44 65 73 88 01 ec 0e 92 01 37 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 61 62 62 61 67 65 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3a 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 61 62 62 61 67 65 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 92 03 dc 02 08 9e 7f 10 29 18 a0 8a c5 9c 06 20 b0 ef fd 9d 06 28 00 38 c6 f6 40 38 c7 f6 40 38 c8 f6 40 38 c9 f6 40 38 ca f6 40 38 cb f6 40 38 cc f6 40 42 01 30 48 0f 50 63 62 11 35 2e 31 52 65 63 68 61 72 67 65 5f 74 69 74 6c 65 6a 39 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 52 65 63 68 61 72 67 65 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3c 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 72 65 63 68 61 72 67 65 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 00 82 01 0f 35 2e 30 52 65 63 68 61 72 67 65 5f 44 65 73 88 01 c0 0c 92 01 38 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 52 65 63 68 61 72 67 65 5f 42 47 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3b 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 52 65 63 68 61 72 67 65 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 a0 01 03 a0 01 06 aa 01 00 92 03 c6 02 08 9f 7f 10 04 18 a0 97 94 9d 06 20 bf cc c7 9d 06 28 00 38 d9 f6 40 42 01 31 48 14 50 63 62 13 36 2e 33 5f 43 61 62 62 61 67 65 73 71 5f 74 69 74 6c 65 6a 3a 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 61 62 62 61 67 65 73 71 5f 74 61 62 5f 74 72 75 65 63 6f 6c 6f 72 72 3d 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 61 62 62 61 67 65 73 71 5f 62 61 6e 6e 65 72 5f 74 72 75 65 63 6f 6c 6f 72 7a 00 82 01 11 36 2e 33 5f 43 61 62 62 61 67 65 73 71 5f 44 65 73 88 01 c0 0c 92 01 39 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 61 62 62 61 67 65 73 71 5f 62 67 5f 74 72 75 65 63 6f 6c 6f 72 9a 01 3c 65 76 65 6e 74 2f 49 6d 6d 65 64 69 61 74 65 6c 79 2f 41 63 74 69 76 69 74 79 50 61 67 65 2f 36 2e 32 5f 43 61 62 62 61 67 65 73 71 5f 74 69 74 6c 65 5f 74 72 75 65 63 6f 6c 6f 72 aa 01 00 9a 03 07 08 88 27 10 c1 93 38 9a 03 07 08 c0 3e 10 c2 93 38 9a 03 07 08 c8 65 10 c3 93 38 9a 03 08 08 a0 9c 01 10 c4 93 38 9a 03 08 08 b0 ea 01 10 c5 93 38 a0 03 14 a8 03 c0 b9 ae c9 05 b0 03 c0 a4 93 cc 05 ba 03 15 41 72 6d 61 64 61 41 63 74 69 76 69 74 79 42 74 6e 5f 44 65 63 c0 03 01 c8 03 3c d0 03 32 d8 03 0a e0 03 00 e8 03 19 f0 03 01 f8 03 ed 40 f8 03 ee 40 f8 03 ef 40 f8 03 f0 40 80 04 36 88 04 1e 90 04 32 98 04 19 a2 04 0c 08 00 10 00 18 00 20 00 28 00 30 00 a2 04 0d 08 01 10 cd 02 18 14 20 03 28 05 30 03 a2 04 0d 08 02 10 9a 05 18 28 20 07 28 0a 30 07 a2 04 0d 08 03 10 e7 07 18 3c 20 0a 28 0f 30 0a a8 04 4b b0 04 05 c0 04 64 c8 04 14 d0 04 90 1c d8 04 8c 01 80 05 0a 88 05 32 90 05 19 a0 05 1e aa 05 bd 06 08 d1 f4 08 08 d2 f4 08 08 d3 f4 08 08 d4 f4 08 08 d5 f4 08 08 d6 f4 08 08 d7 f4 08 08 d8 f4 08 08 d9 f4 08 08 da f4 08 08 db f4 08 08 dc f4 08 08 dd f4 08 08 de f4 08 08 df f4 08 08 e0 f4 08 08 e1 f4 08 08 e2 f4 08 08 e3 f4 08 08 e4 f4 08 08 e5 f4 08 08 e6 f4 08 08 e7 f4 08 08 e8 f4 08 08 e9 f4 08 08 ea f4 08 08 eb f4 08 08 ec f4 08 08 ed f4 08 08 ee f4 08 08 ef f4 08 08 f0 f4 08 08 f1 f4 08 08 f2 f4 08 08 f3 f4 08 08 f4 f4 08 08 f5 f4 08 08 f6 f4 08 08 f7 f4 08 08 f8 f4 08 08 f9 f4 08 08 fa f4 08 08 fb f4 08 08 fc f4 08 08 fd f4 08 08 fe f4 08 08 ff f4 08 08 80 f5 08 08 81 f5 08 08 82 f5 08 08 83 f5 08 08 84 f5 08 08 85 f5 08 08 86 f5 08 08 87 f5 08 08 88 f5 08 08 89 f5 08 08 8a f5 08 08 8b f5 08 08 8c f5 08 08 8d f5 08 08 8e f5 08 08 8f f5 08 08 90 f5 08 08 91 f5 08 08 92 f5 08 08 93 f5 08 08 94 f5 08 08 95 f5 08 08 96 f5 08 08 97 f5 08 08 98 f5 08 08 99 f5 08 08 9a f5 08 08 9b f5 08 08 9c f5 08 08 9d f5 08 08 9e f5 08 08 9f f5 08 08 a0 f5 08 08 a1 f5 08 08 a2 f5 08 08 a3 f5 08 08 a4 f5 08 08 a5 f5 08 08 a6 f5 08 08 a7 f5 08 08 a8 f5 08 08 a9 f5 08 08 aa f5 08 08 ab f5 08 08 ac f5 08 08 ad f5 08 08 ae f5 08 08 af f5 08 08 b0 f5 08 08 b1 f5 08 08 a9 ab 09 08 aa ab 09 08 ab ab 09 08 ac ab 09 08 ad ab 09 08 ae ab 09 08 af ab 09 08 b0 ab 09 08 b1 ab 09 08 b2 ab 09 08 b3 ab 09 08 b4 ab 09 08 b5 ab 09 08 b6 ab 09 08 b7 ab 09 08 b8 ab 09 08 b9 ab 09 08 ba ab 09 08 bb ab 09 08 bc ab 09 08 bd ab 09 08 be ab 09 08 bf ab 09 08 c0 ab 09 08 c1 ab 09 08 c2 ab 09 08 c3 ab 09 08 c4 ab 09 08 c5 ab 09 08 c6 ab 09 08 c7 ab 09 08 9d af 09 08 9e af 09 08 9f af 09 08 a0 af 09 08 a1 af 09 08 a2 af 09 08 a3 af 09 08 a4 af 09 08 a5 af 09 08 a6 af 09 08 a7 af 09 08 a8 af 09 08 a9 af 09 08 aa af 09 08 ab af 09 08 ac af 09 08 ad af 09 08 ae af 09 08 ce fa 36 08 95 fb 36 08 c9 bb 09 08 dd bb 09 08 e7 bb 09 08 84 dc 0a 08 85 dc 0a 08 86 dc 0a 08 87 dc 0a 08 88 dc 0a 08 89 dc 0a 08 8a dc 0a 08 8b dc 0a 08 8c dc 0a 08 8d dc 0a 08 8e dc 0a 08 8f dc 0a 08 90 dc 0a 08 91 dc 0a 08 92 dc 0a 08 93 dc 0a 08 94 dc 0a 08 95 dc 0a 08 96 dc 0a 08 97 dc 0a 08 98 dc 0a 08 99 dc 0a 08 9a dc 0a 08 9b dc 0a 08 9c dc 0a 08 9d dc 0a 08 9e dc 0a 08 9f dc 0a 08 a0 dc 0a 08 a1 dc 0a 08 a2 dc 0a 08 a3 dc 0a 08 a4 dc 0a 08 a5 dc 0a 08 a6 dc 0a 08 a7 dc 0a 08 b4 e4 f4 04 08 b8 e4 f4 04 08 bc e4 f4 04 08 c0 e4 f4 04 08 c1 e4 f4 04 08 c2 e4 f4 04 08 c3 e4 f4 04 08 c4 e4 f4 04 08 c5 e4 f4 04 08 c6 e4 f4 04 08 c7 e4 f4 04 10 04 10 0f 10 14 10 15 10 18 10 19 10 20 10 0a 10 0b 10 23 10 21 10 25 10 24 b8 05 01 c0 05 01 d0 05 c0 c0 b2 9d 06 89 ab cd ef