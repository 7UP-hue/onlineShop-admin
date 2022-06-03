<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:15:44
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-02 15:42:12
-->
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import myHeader from '@/components/header.vue'
import { getProduct } from '@/api/product'
interface ProductList {
  proId: String,
  proName: String,
  price: Number,
  shopId: String,
  createTime: String,
  stock: Number,
  sales: Number,
  proDesc: String
}
const tableData: Array<ProductList> = reactive([])
const showDialog = ref(false)
const editDialog = ref(false)
const editForm = ref({
  proName:'',
  stock: '',
  price: '',
  proDesc: ''
})
const searchQuery = reactive({
    shopId: 'SD00001',
    pageNum: 1,
    pageSize: 7,
    proName: '',
    proId: '',
    createTime: ''
  }
)
const totalSize = ref()
const getProList = () => {
  getProduct(searchQuery).then((res: any)=> {
    if(res.code === 200) {
      tableData.length = 0
      tableData.push(...res.rows)
      totalSize.value = res.total
    }
  })
}
const currentPageNum = ref(1)
const pageNumChange = () => {
  console.log(currentPageNum)
  searchQuery.pageNum = currentPageNum.value
  getProList()
}
const choType = ref('proName')
const searchValue = ref('')
const Search = () => {
  if(choType.value === 'proName') {
    searchQuery.proName = searchValue.value
  } else if(choType.value === 'proId') {
    searchQuery.proId = searchValue.value
  } else if(choType.value === 'createTime') {
    searchQuery.createTime = searchValue.value
  }
  getProList()
}
const cancel = () => {
  choType.value = 'proName'
  searchValue.value = ''
  Search()
}
onMounted(() => {
  getProList()
})
</script>

<template>
  <div>
    <el-header>
      <my-header></my-header>
    </el-header>
    <div class="p-3 mt-5 mx-10 shadow-lg shadow-gray-300 border border-hex-eee min-h-75vh">
      <div class="h-45px border-b border-hex-ccc text-left flex items-center font-600 pl-3">
        <el-icon class="mr-1"><List /></el-icon>
        商品列表 
      </div>
      <el-form :inline="true" class="mt-4">
        <el-form-item>
          <el-select v-model="choType" placeholder="请选择查询方式" >
            <el-option label="根据商品名查询" value="proName"></el-option>
            <el-option label="根据商品编号查询" value="proId"></el-option>
            <el-option label="根据时间查询" value="createTime"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入关键字" v-model="searchValue" />
        </el-form-item>
        <el-form-item>
          <el-button @click="cancel">重置</el-button>
          <el-button type="primary" :icon="Search" @click="Search">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="border border-hex-ccc">
        <el-table :data="tableData" style="width: 100%" >
          <el-table-column type="expand">
            <template #default="props">
              <div class="mx-10 my-3">
                <div>
                  <span class="mr-20">价格：{{props.row.price}}</span>
                  <span>销量：{{props.row.sales}}</span>
                </div>
                <div class="mt-3">版型款式</div>
                <div>
                  <span class="mr-5">袖长：短袖</span>
                  <span class="mr-5">领型：圆领</span>
                  <span>版型：标准</span>
                </div>
                <div class="mt-3">关键信息</div>
                <div>
                  <span class="mr-5">上市时间：{{props.row.createTime}}</span>
                  <span class="mr-5">厚薄：常规</span>
                  <span class="mr-5">材质成分：棉100%</span>
                  <span class="mr-5">品牌：优衣库</span>
                </div>
                <div>
                  <span class="mr-5">描述：{{props.row.proDEsc}}</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="proId" label="商品编号" align="center"></el-table-column>
          <el-table-column prop="proName" label="商品名" align="center"></el-table-column>
          <el-table-column prop="stock" label="库存量" align="center"></el-table-column>
          <el-table-column prop="action" label="操作" align="center">
            <template #default>
              <el-button type="primary" size="small" @click="editDialog=true"><el-icon><edit /></el-icon></el-button>
              <el-button type="danger" size="small" @click="showDialog=true">
                <el-icon><delete /></el-icon>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :page-size="7"
          layout="prev, pager, next"
          :total="totalSize"
          v-model:current-page="currentPageNum"
          class="flex justify-center"
          @current-change="pageNumChange"
        />
      </div>
      <el-dialog v-model="showDialog" width="30%">
        确定要删除此商品吗？
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="showDialog = false">取消</el-button>
            <el-button type="primary" @click="showDialog = false"
              >确定</el-button
            >
          </span>
        </template>
      </el-dialog>
      <el-dialog v-model="editDialog" width="50%">
        <div class="py-5 pr-5">
          <el-form :model="editForm" label-width="100px">
            <el-form-item label="商品名">
              <el-input v-model="editForm.proName" />
            </el-form-item>
            <el-form-item label="商品库存量">
              <el-input v-model="editForm.stock" />
            </el-form-item>
            <el-form-item label="商品价格">
              <el-input v-model="editForm.price" />
            </el-form-item>
            <el-form-item label="商品描述">
              <el-input v-model="editForm.proDesc" type="textarea" />
            </el-form-item>
             <el-form-item>
              <el-button type="primary" @click="editDialog = false">确定</el-button>
              <el-button @click="editDialog = false">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<style scoped>
</style>