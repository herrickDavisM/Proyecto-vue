<template>
    <div class="sidebar">
        <h2>Barra Lateral</h2>
        <ul>
            <li>
                <RouterLink to="/Contador">Contador </RouterLink>
            </li>
            <li>
                <RouterLink to="/lista-de-tareas">Lista Tareas</RouterLink>
            </li>
        </ul>
    </div>
</template>
<script setup></script>
<style>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>