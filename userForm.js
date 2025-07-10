function userForm (req, resp) {
    // resp.write("userForm module is working fine.\n");
    resp.write(`
        <form method="POST" action="/">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Submit</button>
        </form>
        `)
}

module.exports = userForm;