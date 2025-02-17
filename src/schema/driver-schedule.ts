import mongoose, { Schema, Document } from 'mongoose';

interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface DriverSchedule extends Document {
  userId: string;
  schedules: Schedule[];
}

const scheduleSchema = new Schema<Schedule>({
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

const driverScheduleSchema = new Schema<DriverSchedule>({
  userId: { type: String, required: true },
  schedules: { type: [scheduleSchema], required: true },
});

const DriverScheduleModel = mongoose.model<DriverSchedule>('DriverSchedule', driverScheduleSchema);

export default DriverScheduleModel;
