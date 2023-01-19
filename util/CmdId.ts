export type PacketName = keyof typeof CmdId;
export enum CmdId {
    KeepAliveNotify = 1,
    GetPlayerTokenReq = 4,
    GetPlayerTokenRsp = 5,
    PlayerLoginReq = 6,
    PlayerLoginRsp = 7,
    GetMainDataReq = 10,
    GetMainDataRsp = 11,
    GetStaminaExchangeInfoReq = 16,
    GetStaminaExchangeInfoRsp = 17,
    NicknameModifyReq = 20,
    NicknameModifyRsp = 21,
    GetAvatarDataReq = 24,
    GetAvatarDataRsp = 25,
    GetEquipmentDataReq = 26,
    GetEquipmentDataRsp = 27,
    AddAvatarExpByMaterialReq = 35,
    AddAvatarExpByMaterialRsp = 36,
    GetStageDataReq = 41,
    GetStageDataRsp = 42,
    StageBeginReq = 43,
    StageBeginRsp = 44,
    StageEndReq = 45,
    StageEndRsp = 46,
    GetAvatarTeamDataReq = 47,
    GetAvatarTeamDataRsp = 48,
    GetFriendListReq = 64,
    GetFriendListRsp = 65,
    GetAskAddFriendListReq = 70,
    GetAskAddFriendListRsp = 71,
    GetHasGotItemIdListReq = 104,
    GetHasGotItemIdListRsp = 105,
    GetConfigReq = 110,
    GetConfigRsp = 111,
    GetMissionDataReq = 112,
    GetMissionDataRsp = 113,
    UpdateMissionProgressReq = 117,
    UpdateMissionProgressRsp = 118,
    GetWeekDayActivityDataReq = 125,
    GetWeekDayActivityDataRsp = 126,
    FinishGuideReportReq = 129,
    FinishGuideReportRsp = 130,
    StageInnerDataReportReq = 131,
    StageInnerDataReportRsp = 132,
    GetBulletinReq = 137,
    GetBulletinRsp = 138,
    AddGoodfeelReq = 154,
    AddGoodfeelRsp = 155,
    ExchangeRedeemCodeReq = 213,
    ExchangeRedeemCodeRsp = 214,
    GetExtraStoryDataReq = 231,
    GetExtraStoryDataRsp = 232,
    SetDressReq = 232,
    SetDressRsp = 232,
    UpdateAssistantAvatarIdReq = 271,
    UpdateAssistantAvatarIdRsp = 272,
    ReportBirthdayReq = 299,
    ReportBirthdayRsp = 300,
    GetMpDataReq = 340,
    GetMpDataRsp = 341,
    MpGetTeamReq = 346,
    MpGetTeamRsp = 347,
    GetGobackReq = 364,
    GetGobackRsp = 365,
    ReportClientDataVersionReq = 398,
    ReportClientDataVersionRsp = 399,
    GetMedalDataReq = 449,
    GetMedalDataRsp = 450,
    GetClearStageActivityReq = 453,
    GetClearStageActivityRsp = 454,
    MpGetMatchInfoReq = 466,
    MpGetMatchInfoRsp = 467,
    GetBuffEffectReq = 476,
    GetBuffEffectRsp = 477,
    GetPlayerCardReq = 480,
    GetPlayerCardRsp = 481,
    GetExtraStoryChallengeModeDataReq = 502,
    GetExtraStoryChallengeModeDataRsp = 503,
    GetGrandKeyReq = 506,
    GetGrandKeyRsp = 507,
    GetExBossScheduleReq = 508,
    GetExBossScheduleRsp = 509,
    GetMinuteTimesReq = 544,
    GetMinuteTimesRsp = 545,
    GetMasterPupilDataReq = 568,
    GetMasterPupilDataRsp = 569,
    GetTrialAvatarReq = 585,
    GetTrialAvatarRsp = 586,
    GetFrameDataReq = 590,
    GetFrameDataRsp = 591,
    GetDormDataReq = 601,
    GetDormDataRsp = 602,
    GetHasGotFurnitureIdListReq = 619,
    GetHasGotFurnitureIdListRsp = 620,
    GetAvatarRollDataReq = 643,
    GetAvatarRollDataRsp = 644,
    GetMasterPupilApplyReq = 653,
    GetMasterPupilApplyRsp = 654,
    GetMasterPupilMainDataReq = 657,
    GetMasterPupilMainDataRsp = 658,
    SyncTimeReq = 803,
    SyncTimeRsp = 804,
    GetGalInteractTriggerEventReq = 813,
    GetGalInteractTriggerEventRsp = 814,
    TakeGalInteractTriggerEventReq = 815,
    TakeGalInteractTriggerEventRsp = 816,
    PlayerLevelUpNotify = 976,
    GetWorldMapDataReq = 1012,
    GetWorldMapDataRsp = 1013,
    GetReclaimActivityDataReq = 1167,
    GetReclaimActivityDataRsp = 1168,
    GetPhonePendantDataReq = 1197,
    GetPhonePendantDataRsp = 1198,
    GetClientSettingReq = 1270,
    GetClientSettingRsp = 1272,
    GetRegionUidRangeReq = 1380,
    GetRegionUidRangeRsp = 1381,
    GetCurrencyExchangeInfoReq = 1480,
    GetCurrencyExchangeInfoRsp = 1481,
    SetWarshipAvatarReq = 1492,
    SetWarshipAvatarRsp = 1493,
    GetCustomHeadDataReq = 1523,
    GetCustomHeadDataRsp = 1524,
    GetClientDataReq = 1586,
    GetClientDataRsp = 1587,
    SetClientDataReq = 1588,
    SetClientDataRsp = 1589,
    GetWebActivityInfoReq = 1601,
    GetWebActivityInfoRsp = 1602,
    GetEliteChapterCompensationInfoReq = 1636,
    GetEliteChapterCompensationInfoRsp = 1637,
    ChapterGroupGetDataReq = 1660,
    ChapterGroupGetDataRsp = 1661,
    GetChapterCompensationInfoReq = 1672,
    GetChapterCompensationInfoRsp = 1673,
    GetElfDataReq = 2100,
    GetElfDataRsp = 2101,
    EnterWorldChatroomReq = 2231,
    EnterWorldChatroomRsp = 2232,
    GetRpgTaleReq = 2300,
    GetRpgTaleRsp = 2301,
    GetArmadaDataReq = 2601,
    GetArmadaDataRsp = 2602,
    GetConsignedOrderDataReq = 2639,
    GetConsignedOrderDataRsp = 2640,
    GetWareHouseDataReq = 2647,
    GetWareHouseDataRsp = 2648,
    GetArmadaStageReq = 2667,
    GetArmadaStageRsp = 2668,
    ArmadaMatrixGetScheduleReq = 2734,
    ArmadaMatrixGetScheduleRsp = 2735,
    GetArmadaStageScoreActivityReq = 2821,
    GetArmadaStageScoreActivityRsp = 2822,
    GetRoomDataReq = 3150,
    GetRoomDataRsp = 3151,
    GetTvtActivityReq = 3300,
    GetTvtActivityRsp = 3301,
    TvtCardGetDataReq = 3309,
    TvtCardGetDataRsp = 3310,
    SyncRoomDataNotify = 3152,
    SyncRoomMatchDataNotify = 3169,
    GetExtractReforgeActivityReq = 3659,
    GetExtractReforgeActivityRsp = 3660,
    GetBattlePassReq = 3750,
    GetBattlePassRsp = 3751,
    GetClientMailDataReq = 3800,
    GetClientMailDataRsp = 3801,
    GetAdventureGroupReq = 3900,
    GetAdventureGroupRsp = 3901,
    GetAdventureStorySweepInfoReq = 3914,
    GetAdventureStorySweepInfoRsp = 3915,
    GeneralActivityGetScoreRewardInfoReq = 4001,
    GeneralActivityGetScoreRewardInfoRsp = 4002,
    GeneralActivityGetScheduleReq = 4003,
    GeneralActivityGetScheduleRsp = 4004,
    GeneralActivityGetMainInfoReq = 4005,
    GeneralActivityGetMainInfoRsp = 4006,
    GetLoginActivityReq = 4192,
    GetLoginActivityRsp = 4193,
    GetOnlineRewardActivityReq = 4196,
    GetOnlineRewardActivityRsp = 4197,
    GetThemeDataReq = 4244,
    GetThemeDataRsp = 4245,
    GetNewbieActivityReq = 4248,
    GetNewbieActivityRsp = 4249,
    GetBulletinActivityMissionReq = 4321,
    GetBulletinActivityMissionRsp = 4322,
    GetRankScheduleDataReq = 4233,
    GetRankScheduleDataRsp = 4234,
    GetMosaicActivityReq = 4340,
    GetMosaicActivityRsp = 4341,
    ClientReportReq = 5008,
    ClientReportRsp = 5009,
    GetAuthkeyReq = 5010,
    GetAuthkeyRsp = 5011,
    GetWarshipItemDataReq = 5450,
    GetWarshipItemDataRsp = 5451,
    GetWarshipDataReq = 5454,
    GetWarshipDataRsp = 5455,
    SetWarshipReq = 5456,
    SetWarshipRsp = 5457,
    GetThemeWantedReq = 5790,
    GetThemeWantedRsp = 5791,
}