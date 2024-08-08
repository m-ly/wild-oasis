import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSettings from "./useSettings";
import Spinner from "../../ui/Spinner";
import useUpdateSetting from "./useUpdateSetting";

function UpdateSettingsForm() {
  const { isUpdating, updateSetting } = useUpdateSetting();
  const {
    isLoading,
    error,
    settings: {
      minimumBookingLength,
      maximumBookingLength,
      maximumGuests,
      breakfastPrice,
    } = {},
  } = useSettings();

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  if (isLoading || isUpdating) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minimumBookingLength}
          onBlur={(e) => handleUpdate(e, "minimumBookingLength")}
          disable={isUpdating}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="maximumBookingLength"
          defaultValue={maximumBookingLength}
          onBlur={(e) => handleUpdate(e, "maximumBookingLength")}
          disable={isUpdating}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="maximumGuests"
          defaultValue={maximumGuests}
          onBlur={(e) => handleUpdate(e, "maximumGuests")}
          disable={isUpdating}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfastPrice"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          disable={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
