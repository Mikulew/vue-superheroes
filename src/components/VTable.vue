<template>
    <table class="table table-sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Alter Egos</th>
                <th>Lorem ipsum</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <th>1</th>
                <td>Bruce Wayne</td>
                <td>Batman</td>
                <td>"I have a batcard!"</td>
                <td>
                    <router-link to="/1/general" class="btn btn-outline-primary">Button</router-link>
                </td>
            </tr>
            <tr>
                <th>2</th>
                <td>Peter Parker</td>
                <td>Spiderman</td>
                <td>"Everybody likes me!"</td>
                <td>
                    <router-link to="/2/general" class="btn btn-outline-primary">Button</router-link>
                </td>
            </tr>
            <tr>
                <th>3</th>
                <td>Mikulew</td>
                <td>Front-end developer</td>
                <td>"Where is my coffee?"</td>
                <td>
                    <router-link to="/3/general" class="btn btn-outline-primary">Button</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>