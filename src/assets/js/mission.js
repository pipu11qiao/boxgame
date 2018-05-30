// mission只提供位置信息
export function Mission(curMission, missions) {
  this.name = 'missionObj';
  this.curMission = 1;
  this.missions = [];
};
Mission.prototype = {
  constructor: Mission,
  setCurMission: function (num) {
    this.curMission = num;
  },
  addMission: function (mission) {
    this.missions.push(mission);
  },
  getMission: function () {
    return this.missions[this.curMission - 1];
    // return this.missions[2];
  },
  getMissionsCount: function () {
    return this.missions.length;
  },
  getMissionNum: function () {
    return this.curMission;
  }
};
