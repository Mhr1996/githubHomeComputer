<template>
  <div id="app">
  	<keep-alive>
    	<router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Index from './pages/index/index'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Index
  },
  created(){
  	axios.post('/ztyts/yts/task/query.do',{
  		currentPageNum:1
  	}).then(this.getIndexInfo)
  },
  methods: {
  	getIndexInfo(res) {
  		console.log(res)
  	}
  }
}
</script>

<style lang="stylus">
	#app
		text-align: center
		margin-top: 30px
		h1
			text-decoration: underline;
</style>
