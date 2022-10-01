import React from "react"
import { Button, Grid, TextField } from "@mui/material"
import { Stack } from "@mui/system"
import DynamicButton from "components/button"
import { useNavigate } from "react-router-dom"
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { Controller, useForm } from "react-hook-form"
import { getBase64File } from "utils/helperUtils"
import { useFormData } from "context/formDataContext"
import { FieldError } from "components/button/fielderror"

const EventForm = () => {
  const { formData, setFormDataValues } = useFormData()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: formData?.values,
  })
  const navigate = useNavigate()

  const onSubmit = (data) => {
    setFormDataValues(data)
    navigate("/event", { replace: true })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent={"center"} rowSpacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent={"center"} paddingBottom={2}>
            <Grid xs={12} md={4} item>
              <Controller
                name={"EventName"}
                control={control}
                key={"EventName"}
                rules={{
                  required: "This field is required",
                }}
                render={({
                  field: { onChange, name: fieldName, value, ref },
                }) => (
                  <TextField
                    label="Event Name"
                    sx={{ width: "100%" }}
                    ref={ref}
                    value={value ?? ""}
                    name={fieldName}
                    onChange={(e) => {
                      const { value } = e.target

                      onChange(value)
                    }}
                  />
                )}
              />
              {!!errors["EventName"] && (
                <FieldError message={errors["EventName"].message} />
              )}
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            paddingBottom={2}
            // key={field.id}
          >
            <Grid xs={12} md={4} item>
              <Controller
                name={"HostName"}
                control={control}
                key={"HostName"}
                rules={{
                  required: "This field is required",
                }}
                render={({
                  field: { onChange, name: fieldName, value, ref },
                }) => (
                  <TextField
                    label="Host Name"
                    sx={{ width: "100%" }}
                    ref={ref}
                    value={value ?? ""}
                    name={fieldName}
                    onChange={(e) => {
                      const { value } = e.target

                      onChange(value)
                    }}
                  />
                )}
              />
              {!!errors["HostName"] && (
                <FieldError message={errors["HostName"].message} />
              )}
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            paddingBottom={2}
            // key={field.id}
          >
            <Grid xs={12} md={4} item>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <Controller
                  name={"StartTime"}
                  control={control}
                  key={"StartTime"}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({
                    field: { onChange, name: fieldName, value, ref },
                  }) => (
                    <DateTimePicker
                      value={value ?? null}
                      onChange={(newValue, keyboardInput) => {
                        onChange(keyboardInput)
                      }}
                      onAccept={(val) => {
                        onChange(val)
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          sx={{ width: "100%" }}
                          label="Start Time/Date"
                        />
                      )}
                    />
                  )}
                />
                {!!errors["StartTime"] && (
                  <FieldError message={errors["StartTime"].message} />
                )}
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            paddingBottom={2}
            // key={field.id}
          >
            <Grid xs={12} md={4} item>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <Controller
                  name={"EndTime"}
                  control={control}
                  key={"EndTime"}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({
                    field: { onChange, name: fieldName, value, ref },
                  }) => (
                    <DateTimePicker
                      value={value ?? null}
                      onChange={(newValue, keyboardInput) => {
                        onChange(keyboardInput)
                      }}
                      onAccept={(val) => {
                        onChange(val)
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          sx={{ width: "100%" }}
                          label="End Time/Date"
                        />
                      )}
                    />
                  )}
                />
                {!!errors["EndTime"] && (
                  <FieldError message={errors["EndTime"].message} />
                )}
              </LocalizationProvider>
            </Grid>
          </Grid>

          <Grid container justifyContent={"center"} paddingBottom={2}>
            <Grid xs={12} md={4} item>
              <Controller
                name={"StreetName"}
                control={control}
                key={"StreetName"}
                rules={{
                  required: "This field is required",
                }}
                render={({
                  field: { onChange, name: fieldName, value, ref },
                }) => (
                  <TextField
                    label="Street Name"
                    sx={{ width: "100%" }}
                    ref={ref}
                    value={value ?? ""}
                    name={fieldName}
                    onChange={(e) => {
                      const { value } = e.target

                      onChange(value)
                    }}
                  />
                )}
              />
              {!!errors["StreetName"] && (
                <FieldError message={errors["StreetName"].message} />
              )}
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} paddingBottom={2}>
            <Grid xs={12} md={4} item>
              <Controller
                name={"State"}
                control={control}
                key={"State"}
                rules={{
                  required: "This field is required",
                }}
                render={({
                  field: { onChange, name: fieldName, value, ref },
                }) => (
                  <TextField
                    label="State"
                    sx={{ width: "100%" }}
                    ref={ref}
                    value={value ?? ""}
                    name={fieldName}
                    onChange={(e) => {
                      const { value } = e.target

                      onChange(value)
                    }}
                  />
                )}
              />
              {!!errors["State"] && (
                <FieldError message={errors["State"].message} />
              )}
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} paddingBottom={2}>
            <Grid xs={12} md={4} item>
              <Controller
                name={"PostCode"}
                control={control}
                key={"PostCode"}
                rules={{
                  required: "This field is required",
                }}
                render={({
                  field: { onChange, name: fieldName, value, ref },
                }) => (
                  <TextField
                    label="Post Code"
                    sx={{ width: "100%" }}
                    ref={ref}
                    value={value ?? ""}
                    name={fieldName}
                    onChange={(e) => {
                      const { value } = e.target

                      onChange(value)
                    }}
                  />
                )}
              />
              {!!errors["PostCode"] && (
                <FieldError message={errors["PostCode"].message} />
              )}
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} paddingBottom={2}>
            <Grid xs={12} md={4} item>
              <Controller
                name={"EventPhoto"}
                control={control}
                key={"EventPhoto"}
                rules={{
                  required: "This field is required",
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <>
                    {value ? (
                      <Stack alignItems={"center"}>
                        <img
                          src={value}
                          width={"150px"}
                          height={"150px"}
                          alt="userimg"
                        />
                      </Stack>
                    ) : (
                      <Button
                        variant="contained"
                        component="label"
                        sx={{ minWidth: "100%" }}
                      >
                        Upload Event Photo
                        <input
                          hidden
                          accept="image/*"
                          multiple
                          type="file"
                          onChange={async (e) => {
                            const base64File = await getBase64File(
                              e.target.files[0]
                            )
                            onChange(base64File)
                          }}
                        />
                      </Button>
                    )}
                  </>
                )}
              />
              {!!errors["EventPhoto"] && (
                <FieldError message={errors["EventPhoto"].message} />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} md={4}>
          <Stack alignItems={"center"}>
            <DynamicButton
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Submit
            </DynamicButton>
          </Stack>
        </Grid>
      </Grid>
    </form>
  )
}

export default EventForm
