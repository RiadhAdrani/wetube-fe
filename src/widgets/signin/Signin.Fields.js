import InputField from "../../components/form/InputField";
import CenteredColumn from "../../components/utils/CenteredColumn";
import SigninManager from "../../state-managers/Signin.Manager";
import { Var } from "../../util/Style";

export default () => {
    const manager = SigninManager();

    return CenteredColumn({
        style: {
            normal: {
                width: `calc(100% - ${Var("giant")} - ${Var("giant")})`,
            },
        },
        children: Object.keys(manager.form.value).map((key) =>
            InputField({
                ...manager.form.value[key],
                disabled: manager.fetching.is,
                onChange:
                    manager.form.value[key].onChange ||
                    ((e) => manager.form.setField(key, e.target.value)),
            })
        ),
    });
};
