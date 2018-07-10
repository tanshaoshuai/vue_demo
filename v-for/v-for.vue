<template>
	<div>
		<h3>第一种</h3>
		<ul id="example-1">
		  <li v-for="item in items">
		    {{ item.message }}
		  </li>
		</ul>
		
		<h3>第二种</h3>
		<ul id="example-2">
		  <li v-for="(item, index) in mydata">
		    {{ parentMessage }} - {{ index }} - {{ item.message }}
		  </li>
		</ul>
		<h3>第三种</h3>
		<ul id="v-for-object" class="demo">
		  <li v-for="value in object">
		    {{ value }}
		  </li>
		</ul>
		<h3>第四种</h3>
		<div v-for="(value, key) in object">
		  {{ key }}: {{ value }}
		</div>
		<h3>第五种</h3>
		<div v-for="(value, key, index) in object">
		  {{ index }}. {{ key }}: {{ value }}
		</div>
	</div>
	
</template>

<script>
	export default {
		data () {
			return{
				parentMessage: 'Parent', 
				items: [
			      { message: 'Foo' },
			      { message: 'Bar' }
			    ],
			    mydata:[
			      { message: 'Foo' },
			      { message: 'Bar' }
			    ],
			    object: {
			      firstName: 'John',
			      lastName: 'Doe',
			      age: 30
			    }
			   
			}
			
		}
	}
</script>

<style>
	li{
		list-style: none;
	}
	
</style>