import express, { Request, Response } from 'express'
import DriverScheduleModel from '../schema/driver-schedule'

const router = express.Router();

router.get('/getAllByUserID/:userId', async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const records = await DriverScheduleModel.find({ userId: userId })
    if (records.length === 0) {
      res.status(404).send('No records found')
    }
    res.status(200).send(records)
  } catch (error) {
    // return res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const newRecordBody = req.body;
    const newRecord = new DriverScheduleModel(newRecordBody)
    const savedRecord = await newRecord.save()

    res.status(200).send(savedRecord)
  } catch (error) {
    console.log('HERE:::::', error)
    console.log(error)
    // return res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const newRecordBody = req.body;
    const record = await DriverScheduleModel.findByIdAndUpdate(id, newRecordBody, { new: true })
    if (!record) res.status(404).send()
    res.status(200).send(record)
  } catch (error) {
    res.status(500).send(error)
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const record = await DriverScheduleModel.findByIdAndDelete(id)
    if (!record) res.status(404).send()
    res.status(200).send(record)
  } catch (error) {
    // res.status(500).send(error)
  }
});

export default router;