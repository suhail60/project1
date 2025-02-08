import React from 'react'

function navbar() {
  return (
    <div>
        <div className="nav">
            <div className="logo">CRICBUZZ</div>
            <div className="navlist">
                <ul>
                    <li>Live Score</li>
                    <li>Schedule Match</li>
                    <li>News</li>
                    <li>Series</li>
                    <li>Teams</li>
                </ul>
            </div>
            <div className="nav_btns">
            <i class="ri-search-line"></i>
                <span>EN</span>
            </div>
        </div>
    </div>
  )
}

export default navbar