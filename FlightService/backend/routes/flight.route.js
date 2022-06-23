const router = require('express').Router();
const flightController = require('../controllers/flight.controller');

router.get('/', async (req, res)=>{
  try {
    const flightList = await flightController.getAllFlights()
  res.status(200).send(flightList)
  } catch(err){
    res.status(err?.status || 500).json(err)
  }
 
})

router.get('/:id', async (req,res)=>{
  const flightId = req.params.id
  try{
    const flight =  await flightController.getFlightById(flightId)
    res.status(200).json(flight)
  } catch(err){
    res.status(err?.status || 500).json(err)
  }
})

router.post('/create-flight',async (req, res)=>{
  try{
    const flightId =  await flightController.createFlight(req.body)
    res.status(201).json(`New flight has been created with flight id: ${flightId}`)
  } catch(err){
    res.status(err?.status || 500).json(err);
  }

})

router.delete('/delete-flight/:id', async(req,res)=>{
  try{
  await flightController.deleteFlight(req.params.id)
    res.status(200).json("Flight has been deleted.")
  } catch(err){
    res.status(err.status || 500).json(err)
  }
})

router.patch('/update-flight/:id', async (req,res)=>{
  const flightId = Number(req.params.id);
  const update = req.body;

  try{
   const flight = await flightController.updateFlight(flightId,update)
   res.status(200).json(`Flight's ${update.key} has been updated to ${flight[update.key]}`)
  }catch(err){
    res.status(err?.status || 500).json(err)
  }
})


module.exports = router;