<template>
    <div id = 'students'>
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card
                        class="mx-auto"
                    > <v-toolbar
                            color="teal"
                            theme="dark"
                        >
                            <v-toolbar-title class="text-h6">
                                Students
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                            <v-table>
                                <thead class="header">
                                <tr>
                                    <th class="text-left">Firstname </th>
                                    <th class="text-left">Lastname </th>
                                    <th class="text-left">Gender </th>
                                    <th class="text-left">Email</th>
                                    <th class="text-left">Phone</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="student in students" :key="student.id">
                                        <td>{{ student.firstname }}</td>
                                        <td>{{ student.lastname }}</td>
                                        <td>{{ student.gender }}</td>
                                        <td>{{ student.email }}</td>
                                        <td>{{ student.phone }}</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-container>
                    </v-card>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            students: [
                {firstname: 'John',
                lastname: 'Richard',
                gender: 1,
                email: 'jrichard@gmail.com',
                phone: '25473423782'
            },
                {firstname: 'Jane',
                lastname: 'Johnson',
                gender: 1,
                email: 'jrjohnson@gmail.com',
                phone: '25476723782'
            },
                {firstname:'Joseph',
                lastname: 'Mathews',
                gender: 1,
                email: 'jmathews@gmail.com',
                phone: '25473423321'
            },
                {firstname:'Mary',
                lastname: 'Richard',
                gender: 1,
                email: 'mrichard@gmail.com',
                phone: '25473490782'
            },
                {firstname:'Miriam',
                lastname: 'Alfred',
                gender: 1,
                email: 'malfred@gmail.com',
                phone: '25473423901'
            }
            ]
    }},
    methods(){
   
    },
    
}
</script>