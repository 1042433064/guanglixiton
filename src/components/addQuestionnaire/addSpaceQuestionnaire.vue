<style lang="less" type="text/less" >
    #addSpaceQuestionnaire{

    }
</style>
<style lang="less" type="text/less" scoped>
    #addSpaceQuestionnaire{

    }
</style>
<template>
      <div id="addSpaceQuestionnaire">
          <el-row  >
              <el-col :span="24" class="backWraper"><div class="back" :plain="true" size="small" @click="goBack">返回上一页</div></el-col>
          </el-row>
          <iframe ref="MainBody" id="MainBody" width="100%" scrolling="auto" frameborder="0" src="" height="600"></iframe>
      </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        props:['QName','tqid','bodyVal','QKey'],
        components: {},
        data() {
            return {}
        },
        methods:{
            //返回上一页
            goBack(){
                if(this.QKey){
                    //编辑状态下的返回
                    this.$emit('goBack','update');
                }else{
                    this.$emit('goBack');
                }
            }
        },
        created(){},
        mounted(){

            if(document.domain=='localhost'){
                document.getElementById('MainBody').src="/questionnaire/questionnaire.html";
            }else {
                document.getElementById('MainBody').src="http://scan.luampm.com/lza/questionnaire/questionnaire.html";
            }

            //赋值问卷名
            window.QName=this.QName;
            //问卷数据id
            window.tqid=this.tqid;
            window.QKey=this.QKey;
            //导入问卷文本
            window.bodyVal=this.bodyVal;
            //$http
            window.vueHttp=this.$http;
            //刷新
            window.reload=function(){
                location.reload();
            }
        },
    }
</script>


