import moment from 'moment';

class GraphTimeController {

  static moveOnTimeByUnits = (mode, date, units) => {
    date = GraphTimeController.parseToMoment(date);
    date = GraphTimeController.incrementDateByUnits(mode, date, units);

    return date;
  };

  static isMomentObject = (obj) => {
    return obj instanceof moment;
  };

  static parseToMoment = (obj) => {
    if (GraphTimeController.isMomentObject(obj))
      return obj;
    return moment(obj);
  };

  static parseFromMoment = (obj) => {
    if (GraphTimeController.isMomentObject(obj))
      return obj.format('YYYY-MM-DD');
    throw 'Non moment object passed to parseFromMoment';
  };

  static parseToAxis = (obj, mode) => {
    if (mode === 'd')
      return obj.format('MMM-D');
    else if (mode === 'w')
      return 'Week ' + obj.format('W');
    else
      return obj.format('MMM-YY');

  };

  static incrementDateByUnits = (mode, date, units) => {
    date = date.clone();

    if (mode === 'd')
      date = date.add(units, 'days');
    else if (mode === 'w')
      date = date.add(units, 'weeks');
    else
      date = date.add(units, 'months');
    return date;
  };

  static buildTimeAxisFromDate = (mode, date, units) => {
      const timeAxis = [];
      const endDate = GraphTimeController.incrementDateByUnits(mode, date, units);
      let startDate = GraphTimeController.parseToMoment(date).clone();

      while(startDate.isBefore(endDate)) {
          timeAxis.push(GraphTimeController.parseToAxis(startDate, mode));
          startDate = GraphTimeController.incrementDateByUnits(mode, startDate, 1);
      }

      return timeAxis;
  }
}


export default GraphTimeController;