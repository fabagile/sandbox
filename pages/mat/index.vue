<script setup>
    import collection from "./equipments.json"
    const {recs} = collection
    const header = Object.keys(recs[0])
    const set = [...new Set(recs)]


    // const records = recs
    console.log(collection)
</script>


<template>
    <h2>Matériel</h2>
<pre>
    {{header}}
</pre>

    


<table class="table table-striped">
  <thead>
    <tr>

      <th v-for="(item,i) in header" :key="i" class="text-uppercase text-center" scope="col">{{item}}</th>
      <!-- <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th> -->
    </tr>
  </thead>
  <tbody>
    <tr v-for="(row,r) in recs"  :key="r">
      <td class="text-center" v-for="(cell,c) in row" :key="c" >{{cell}}</td>
      
      <!-- <th scope="row">1</th> -->
      <!-- <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
       -->
    </tr>
    <!-- <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr> -->
  </tbody>
</table>


</template>