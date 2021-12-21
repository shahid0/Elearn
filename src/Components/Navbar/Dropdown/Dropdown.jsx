import { Dropdown, Anchor } from "atomize";
import React from "react";
import { Div } from "react-atomize";

const menuList = (
    <Div p={{ x: "1rem", y: "0.5rem" }}>
        {["Profile", "Settings", "Logout"].map((name, index) => (
            <Anchor d="block" p={{ y: "0.25rem" }}>
                {name}
            </Anchor>
        ))}
    </Div>
);
class TargetHoverDropdown extends React.Component {
    render() {
        return (
            <Dropdown targetHover menu={menuList} w="100px" border="none" d='flex' justify="flex-end">
                Menu
            </Dropdown>
        );
    }
}
export default TargetHoverDropdown;