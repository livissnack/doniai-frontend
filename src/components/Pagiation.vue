<template>
  <nav
    class="column is-small is-two-thirds pagination is-centered"
    role="navigation"
    aria-label="pagination"
  >
    <ul class="pagination-list">
      <li>
        <a class="pagination-link"><i class="fas fa-backward"></i></a>
      </li>
      <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
      <li><a class="pagination-link" aria-label="Goto page 2">2</a></li>
      <li><a class="pagination-link" aria-label="Goto page 3">3</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" aria-label="Goto page 7">7</a></li>
      <li><a class="pagination-link" aria-label="Goto page 7">8</a></li>
      <li>
        <a class="pagination-link"><i class="fas fa-forward"></i></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="less">
.pagination {
  margin: 0 auto;
  .pagination-list {
    display: flex;
    justify-content: center;
    .pagination-link {
      color: #14b982;
    }
  }
}
</style>
