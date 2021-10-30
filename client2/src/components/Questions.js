import React from 'react'

const Questions = () => {
    return (
    <>
        <div className="container">
            <form action="/action_page.php">
                <div className="row">
                    <div className="col-25">
                        <label for="country">Question Placeholder</label>
                    </div>
                    <div className="col-75">
                        <select id="country" name="country">
                            <option value="australia">Answer Placeholder 1</option>
                            <option value="canada">Answer Placeholder 2</option>
                            <option value="usa">Answer Placeholder 3</option>
                        </select>
                    </div>
                </div>
                
                <div className="row">
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    </>

    )
}

export default Questions