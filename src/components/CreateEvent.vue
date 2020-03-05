<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Event Name</label>
      <input type="email" class="form-control" placeholder="event name" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Artist</label>
      <input type="password" class="form-control" placeholder="ชื่อศิลปิน" />
    </div>
     <div class="form-row">
    <div class="form-group col-md-6">
      <label for="exampleInputPassword1">StartDate</label>
      <input type="password" class="form-control" placeholder="วันเริ่มต้น (12/01/20)"/>
    </div>
    <div class="form-group col-md-6">
      <label for="exampleInputPassword1">EndDate</label>
      <input type="password" class="form-control" placeholder="วันสิ้นสุด (12/02/20)"/>
    </div>
     </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Location</label>
      <input type="password" class="form-control" placeholder="สถานที่(mrt station)"/>
    </div>
    <div class="row">
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="cencle" class="btn btn-warning">Cancle</button>

    </div>
  </form>
</template>

<script>
export default {}
</script>

<style>
</style>
