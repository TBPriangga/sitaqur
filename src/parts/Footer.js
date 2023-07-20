import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
            Memberikan pengalaman yang optimal bagi para pengguna yang mencari buku dan kitab-kitab santri secara online.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Pengguna Baru</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Akun Baru
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Mulai Memesan
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Pembayaran
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Jelajahi</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Ulasan
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Hubungi Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:21102158@ittelkom-pwt.ac.id"
                >
                  21102158@ittelkom-pwt.ac.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6285854478985">
                  085854478985
                </Button>
              </li>
              <li className="list-group-item">
                <span>Sitaqur, Purwokerto, Jawa Tengah</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2023 • All rights reserved • Sitaqur
          </div>
        </div>
      </div>
    </footer>
  );
}
