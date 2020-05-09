<template>
  <div class="pendaftaran">
     <div>
        <b-card bg-variant="light">
            <b-form-group
            label-cols-lg="3"
            label="Silahkan Isi Form Pendaftaran"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
            >
            <b-form-group
                label-cols-sm="3"
                label="Nama:"
                label-align-sm="right"
                label-for="nested-nama"
            >
                <b-form-input id="nested-nama"></b-form-input>
            </b-form-group>

            <b-form-group
                label-cols-sm="3"
                label="Tempat Lahir:"
                label-align-sm="right"
                label-for="nested-tempat"
            >
                <b-form-input id="nested-tempat"></b-form-input>
            </b-form-group>

            <b-form-group
                label-cols-sm="3"
                label="Tanggal Lahir:"
                label-align-sm="right"
                label-for="nested-date"
               
            >
                <b-form-input type="date" id="nested-date"></b-form-input>
            </b-form-group>

            <b-form-group
                label-cols-sm="3"
                label="Jenis Kelamin"
                label-align-sm="right" class="mb-0"
            >
                <b-form-radio-group
                class="pt-2"
                :options="['Pria', 'Wanita']"
                ></b-form-radio-group>
            </b-form-group>
            <hr>
            <b-form-group
                label-cols-sm="3"
                label="Nama Ayah:"
                label-align-sm="right"
                label-for="nested-nama"
            >
                <b-form-input id="nested-nama"></b-form-input>
            </b-form-group>
            <b-form-group
                label-cols-sm="3"
                label="Nama Ibu:"
                label-align-sm="right"
                label-for="nested-nama"
            >
                <b-form-input id="nested-nama"></b-form-input>
            </b-form-group>
            <b-form-group
                label-cols-sm="3"
                label="Pekerjaan:"
                label-align-sm="right"
                label-for="nested-pekerjaan"
            >
                <b-form-input id="nested-pekerjaan"></b-form-input>
            </b-form-group>
            <b-form-group
                label-cols-sm="3"
                label="Alamat:"
                label-align-sm="right"
                label-for="nested-alamat"
            >
                <b-form-input id="nested-alamat"></b-form-input>
            </b-form-group>
            <b-form-group
                label-cols-sm="3"
                label="Rt:"
                label-align-sm="right"
                label-for="nested-rt"
            >
                <b-form-input id="nested-rt"></b-form-input>
            </b-form-group>
            <b-form-group
                label-cols-sm="3"
                label="RW:"
                label-align-sm="right"
                label-for="nested-rw"
            >
                <b-form-input id="nested-rw"></b-form-input>
            </b-form-group>
            <b-form-group
                label-cols-sm="3"
                label="Dusun:"
                label-align-sm="right"
                label-for="nested-dusun"
            >
                <b-form-input id="nested-dusun"></b-form-input>
            </b-form-group>
            <b-form-group
                label-cols-sm="3"
                label="Desa:"
                label-align-sm="right"
                label-for="nested-desa"
            >
                <b-form-input id="nested-desa"></b-form-input>
            </b-form-group>
            <b-form-group
                label-cols-sm="3"
                label="Kecamatan:"
                label-align-sm="right"
                label-for="nested-desa"
            >
                <b-form-input id="nested-desa"></b-form-input>
            </b-form-group>
            <b-form-group
                label-cols-sm="3"
                label="Kabupaten:"
                label-align-sm="right"
                label-for="nested-desa"
            >
                <b-form-input id="nested-desa"></b-form-input>
            </b-form-group>
            <b-form-group
                label-cols-sm="3"
                label="Kode Pos:"
                label-align-sm="right"
                label-for="nested-desa"
            >
                <b-form-input id="nested-desa"></b-form-input>
            </b-form-group>

                <div class="p-2 m-auto">
                    <b-button class="mr-3" variant="primary">Submit</b-button> 
                    <b-button variant="danger">Cancel</b-button>
                </div>
            </b-form-group>
        </b-card>
        </div>
  </div>
</template>

<script>

</script>