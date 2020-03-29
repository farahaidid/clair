<!-- =========================================================================================
    File Name: FormWizardNumberTab.vue
    Description: Form wizard with numbers in tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card >
    

        
        <div class="mt-5">
            <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="formSubmitted">
                <tab-content title="Synchronisation" class="mb-5">

<br>
            <h3>
Commencez par synchroniser votre compte bancaire.</h3><br><br>

<center>
                    <img src="https://www.assurbanque20.fr/wp-content/uploads/2015/03/logo-acpr-600x255.png" width="22%" />
</center>
<br>
        <vs-alert color="primary"  active="true" class="mt-5">
            <span>Synchronisation bancaire autorisee par l'<b>ACPR - Banque de France</b>
            </span>
        </vs-alert>
          <br>  - Acces en lecture seule uniquement.
             <br>- Annulable en un clic, a tout moment.
                </tab-content>

            



                <!-- tab 2 content -->
                <tab-content title="Ajouter votre Banque" class="mb-5">
                     <div class="vx-row">
                        <div class="vx-col  w-full mt-5">
                        <h3>Selectionnez votre Banque professionnelle</h3><br>
                            <vs-select v-model="city" class="w-full select-large" >
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                            </vs-select>
                        </div>
                    </div>
                    <br><br>
       Ou cliquez directement sur l'un des choix frequents :
                               <div class="demo-alignment mt-5"><br>
         <vs-avatar size="70px" src="https://yt3.ggpht.com/a/AGF-l7-FmxShgkaBYNVlbapwbApbtlOTRuPUiL7AuA=s900-c-k-c0xffffffff-no-rj-mo"/>
           
            <vs-avatar size="70px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABa1BMVEXrHCT////tGyT8///sGyflHinqr67///7//f///P/rFiDtGyf9/f/bDBLwGiXoHiH/+u740MTfo57QRkLWChbgABvrGx3//ffRJyr93N7fGB7YpaP3//vVW1z95+HVWV//7uXea2rUEQD/9//QHSz0///3//n1GCLnHx7/9/T/9+7/9vnx//r/9f/hIiHs///7//D/8O7cJSXMFyDKCQDQQEbvvLi8MzHihoHnUlTcJhzeiYr75tvELTLZmI7DPkvx0dXHHyzIWV7voqfZcXTivrnyxMj0GxzTCiPFYWfNcGnacHbapI3KOirKGS3Qfn3nu7bUjIHFFxD+1NDkiYzrwsv28NzfGDPqpLP7DRXivKrThW7flJTnpZvHVk2+OS/XlIPjdW3JTE62bmyxABL/0sL738r+sKDikprLZ2CpNjzgsqXGRz7Mp6XjAADYmIfPSD3fPz6vEyTky9LChYDgUWLpbGe9ZVvzo5zg595TAAAf6ElEQVR4nO19C1vbSLqmpJIslSSXbCKXsFo4ToRU8gXhS3DTASchTWN3Mt0kdp/uyQz0zPHO5IQlmz179vT2/PytkkTs+AYEc3E/eZlhngyFqVdV9dV3F8d9wRd8wRd8wSQEQUBIkgSCSdAQb3s21wAhgqoahv319jeqcNvzWTgERil8TIi5urPb6uI/JkNDILn2k91a8amm3vZ8Fg/K0DBye0cF2QM7JpJuez6LAmLfNFESCcbEbh8VLG8DPtvDgXbbM1sUGENB1AgKg3T7uGjxwFNKzyUS/GF2aXRD4CAMc1tHxZqjONCpfZsjnQDd9swWBnZDYJzeOi7zvAJ1B8q7bTsIBHLbE1sUKD/DtrdSZZ+HFd7xZVDZt8OQQ3+IywIhLjQErnvvu5KlQyg7FoV30BWQhlB427O7EqLLXRRFjnSweb9VlvkzyLXyH+QqpOJFkzSEH95vZXygf2QISkdp8odQSRFCQod0v/+OHjzoDpeQf7bXwX+Iyx4hwzZfZOGGB119EyQEdVD53sbhkl/2VHiKdJPmGg+elSwAdeABCro/gcwDvmUSI1zai4KKlzAUBYxEEXdf9ofihbIDOvB16Pf3llvKMPVFlDgDd/ff1vwRhgp0IQRu4U8/4Nue49UgEIICrP54WJB9vzKUL7zjyCW5sLP6wVhyMSrQGz7d3MlD6Lqu7g0ZVvza2/1mOsBouYUMJfi4t5NXPHroPA+AIUPr4IGZDgyRPoHbnuRnINIvscpJEsbdn/Ls9Mkyk56K5XgAQt2qf7dm5ggdpy2pLsqMB1Ey1A9727u10ogA3dRd6OnKq0HaDoVlNpYEJNArjqy+zlvVqgw/MtRd3bHKqae2+piNue1pXgFICMMPve08T9UzVx/eEcDxi99uPQwEUURLTZAyfNzb79ccqFOAkVuw8O2PORUbobiM/JhiLWCjISES2usv+3TFZF6h8kWG0HEs6Dp+4Wi1KyJDZC62257uZ4CeK4EqZ4QEQe5BdlR/oUfRdat+4ad12zCYDby0oAwlEWPzt4NM1RlRX2TLkuXCkz2104kW+rbneSUYOH3/33SH3nlDASpDvfb2dTMXhni5GdLdZxjprVeWp0OoAGdEfaHqZ4fQn6ooCsTc9kw/A5Io0g2KOul7qRIPFIUZfgoVLw7v6lWrsL1qU/qxkZE4bJYDw/WgumXIIbx6XB8qnqDqKFDR/eLr9RyVL0vEa4ghw8DgxFzv9S49fh8lqOxAV6n9fPQLEkNjqVZuiCHDkKDufkGBwLJGJKinF56s21IYGNyyMxSI+fzAAq6r+EP5AkDxeC8nSYKqqksqXgQmGTmR/m/6aavmbDi+z0OdVxRZlnmdr/y5ncaSqGkCWkKCQhxaURlBpO6tbLgAKIn7hSqiVE2DqXsPDW7ZeA0RMTRCQxXUN70XeQ/qZwyplUuNeffg10edJT17MeITiAgR7ftZ34EAOAlDr+pbpWe/p98QiWkvS0sxYoiQ1nz6Z1mulGrM/xIzpP94u5/udAJJZAr20irZEUOx0XtdAL4HoU+1GF6OLnun8FMTY06TOKalLWVEkGpeoaFJoaqaz5/xyd6Ufd+XfUu3yv9abXBLnvejiaKGDIPkvj7NWICXE/miQOhC6y8/mA1pOa3bIQx6/hAJmi8LNYfeC/END3QInNrBb2aA0TIbuBGoBSRK9qBvURH60UZSdL789q89Q5QQWfI9SpVsjOzmUd3xdFl2zu4IGZRWmoGKQ07FTAu/7Ul+LiQiNCQpeLR2AHnAM+VMh4oFgQf8V/fSnEaVgNue4hWBqBajofXjshNbgXT9qIoGQSm/v2erS7twQwgoxMR8kVe8SuyDoafQkV05s7KOBLz0x4+B6qHrxzXLhV60hooCfMuyUlumiHGgLuPlPo7QXCuw0wc+MrSswmGTIDFQVSO47el9LiL3tECQZODVf5UAE6EyZN5sQLW1TOrrnEh1M266E3s5VjUyD1AQktyvfctzYyWGLp8HPL//3J63N5fEtIisCCHAD3fqfhVsyPKZlsaXn6wjMvt+YMGzJYkQ0mki7W//tDyguzCORkCvWjsYmJIazDl9Amcvxz6lWy1Mf1+UK1UIqf0QMXRLmb/3sBFSI3jOb4a2fWOz/DwYUTRJwEbz2HJ1UAJUTYOyQi16v79FrVxC5c/UdLT4/EnBv39jM0fOnVzI2BHDIhEIpe8lqUy6okBFplZE/cmeGAZ4ZgwiPn7a6s8HpiByBN9FZS52UwhGEATmy0LiBVWSTK3sUxsRSRJmR1lYkJDgU6+yjVXDuJNJXdHktTAgqPmE2rl+xJCunmM59aP/CgnhJHF2HMkIERGMX8sbTrFtU2PjLm7TeA0NVWi3rKpesc4YWlb+uS1wQRgmFUszJk9Q2NuFlRpo7aE7zJDg9KBQ1S3fYo4mxlAufdemRi5SDUwMYw5DhHrbFqzVNqyXd5Qh24dGkN4vnrmyqbGr66B+2LuI1FBFqbO1Ef2e318P72RcVBKMhmE/qVU2onRs4PBUibH6g4Z4kYkahthsxXncldoxXe67x1AgjYbYTMmbdN0iL4UMdCuT2sOdC83TUNXDUmwl66B2r3MHGXKShH7JbgIXeGeatrX7uiuSOXroCDSjnT/z8kM5myY3zvD8Pyap738G1D4CVhLTBfkBxpIkflIDOetzNPPU8awkTArLP9wwQ4kJQ0mcBY3eEQR3BsUkF9SRXZ1avK09dWRQ/Emipmnj3hmqBQmadJIBSbi75oK/p2+MWzIHZAQq0mYCB9h49KLon4VyeZZN+KT3OCBjA8UwpM9j/NMFA3PNvqXDWA+C+kFPvWEbKrSDx2b64Uz0zG5zP+MDJQ61UGPeL/6PfzRN0xwfmctx4vgaaqij9o5kAJX4EbnWPazdcJqzSsi9f+7m58JSAK/EPkNAGZbz+d1+vjA2aPftfzSN8cmLAm4M6l50wUQMT9M3Xq+lkt4rXwez4TlOVXGc2Jqn5xDqDr3v6f89Nm7T2rcn95+Bmwd0/R0nlqWFpiqhG1G9I2kWYCQKgb1vUSNItuKvCPLHLyo7Acs0+JhzLsvMpOAhDxRrOLjmlywr1UUTl4ekpvcrDrtAFb1asZQTW7uQkrAghiyoEgZ7fZ4fSXv5HDgyFT+FpyKZECKSsFqoxondlqfXWr3GTXkyYmOBFa+YxzUIzmFwHjzXrZZ+yhE8GsaOmASPUt5mJVp8C3jF/7y5MHBs8EnUrPmtXNXP9OnPZghdv9XE2DA++RPsFD4vQTcWwhaUdz6oN5avHmsVVM3fy0Ldg/p5HOZD8bz6wDbo8xqhyKgYzWeeVYkrY3SrL0WuuBs6h9EcMLGf+FQXU5g0+QQsX1Ie5aDwzsSgj6hs+u9szGqaRmaPERUzK1C36EVKRTGvl3+NmyTcoEYqEG5QHxf6H/HJNvR01519pejV3T1u/A7oSFJnUI+fD6ASmF/pCTcdcjNIMwsgPwXsPoAjh5MlOc0RR6B0EqAJlbSBzYPox7LsQgDye4ZBbtZmEhr2g91yvTgNhUKxOlJY5lbqhekDI9RTZmeiTYeE3xwqUf667ytetfRCJDfNkCNEWp+Fvf+ZH1ldrzBYXZ05dn2vyaEJs0Lq/FDQo89wHLiZaTUldOO7VJQkFQfqp6AGOcsvaLZqVT7ZYzyff6p2JkYOgalUGVVVWAaYiNKnQI+0URm6zu6WKInJOhvMRcz6tHDXqIPP8d5Sgwd1zJTiJDYrpOrK+yYixlR7ftyHGHvHCVUmgpOS5yTecWAd2cLwxyph4UXhWrM0ZjMkqhEE6aOa50Y7DFRdrzho0CWa7rAY/6CYAoW619c9PRGl4KA58mOE6KoHIUbXmS01myEyMMH3y1XXjSSN7Ffra2kS7amLfFDiO8YkfVTy9Jgh8MprCZlEWzQ6hDRfb01q6ovDHE+JgbV2wdeTIl29VN7HGNPDOX34dIZUlRjUqd3LxzalRa9CYfhjTTJI9/6BnGpeT9l29Ke0OJ9VmAQy1PWsr0CPj3epdWSycApBk6Pj3jlTGGrsppWBDuMYDijssaM3fACivb5S0134Al+LhsP0RUHSsGlPhWn2jpTh7S6f9nBanTYwlzPT6bSkTTlNoqgexnIKQB1W/EOJ4BEHm9j4vkDp6352VWqQ6zD5mWm4evTV0cpUHK0UR/SX0v86Oj6dPvCYffv7qiRMZgehr3fjz9Ah9JyWyToifWQoNI4tUClBWK2tmCQwFu6YYhU5wsMdlv0yVY1WrKo+ctkrrHPF1IEOM33/3pwiZYXcqRV7xyGA1XKbI3gkWCE0W7wLqjz0vPKv5PHiXW/svg3vFTyPBVcm4QHgjZTSUUFIte5pA4Gne35/T5qyS4210tlDAsB6bYahgUbCMeRpneW6U2Ue9pvBNTTWQ4h7+Mr3NphHaQqoNeWMGE7M/+tPHajDamZNEkUqhT79A0LzrazHiVKW5fXNgCo4KBwyRN2jDD2gzJ3F73QuFhm4IKLbGCPRfMncg/yoATgXUwfSy8A6NQXu0zoKoRMQ80kmuet5q1a+r2GOyaOOIOZUerGycGMzW91QHJ/SrK++ESMlYDErGfufJLyavyi3edDlwtdovMRHoDrqoGjpSrwP6FUYeeAIUe3V59vbv7clhNXQfl7SgUxtY19vPSILrMSIL6Pgw7F3Vd8TA7QOc+NBFkEIUbflO1Dx48s+3+4QSaRr19zuly3Lyu/8I1BDlFtxPIWl9Ovy72+ExeWCR7ex2LlXvqJfJkYp21QjwfwpQ+mQJfTRy54eBL3yMnjDSZwq7n1rOVUP6LyVbVK1ibR3rRI1q6hmke8tsJ47mo3Wy0LrwkdwDuoDrErjDA1uvczq7SO/saIcNFlHJMR138lVABWLdz2fKmsBUQ+LFmv6UfM2VtIGWqRpjHL/23flCU+LC3U6Jx3G0QmlwvrHzPb0s2tTOeoSNKKXMqNP5JB56rtKVBZUdUD9nkpPIcKdp3WfZfdFqqryfSfgNLPlQ0/mqbSxtoKFphEZ//lzzZqGWobd7bEqAqr+1DFnyGQy5fw/JI0bCVgz1UYT1LWMnJStlSzvXS76mdE5UwSj7ykV0/tjUFCSDhkHj1RpkQka/2ft+f21+2NYe36ytvbfZT+5qF09e3/tZHzQyHCKLXoVhsKQISs+R6jXB24tmri34We7kb4tSuarxCUbMSyYBjEC9Scr8XWB7Q+PFxjNiGpcCJvMECrpqASZrbKTWHR6aaC++XTMp79AQYX8GENEOPOI2l216DOgV1uLrSPK8Dt+hOFujzEkzbdW4isurnbERTo0mC/G+BSqICJpUJLPdqm10gioLTwTavRfgoxPGBKhca9ercTZDLzlpD7ErfPEMJ2CH3epwmfNAEnUzB8UYyPb0l89WpAwVVn+NcLYmPAliSIyU8yiY37RCiy0kRpqMz1PdP2oXciaAo0wpKeQ9FK6Q0175kPna/kfcRwx1UT70II81Xapoibr+rdUeIrI6KRXajyLRtZc64WxsLxMUZwWrDdCMXhfibcMBJ683RCpnJw2crbvSBWl9H7c34MqNAoo79tJ5S/9pb1C1fGA4zsbsFrZsqP4DLsU5QpwLF+Rs6sCizJcVaDGR3BaxoUQcOlUUlm3AarZVYNQhtNGIoJmlKMZhvh1IT5t1K7S+daqpiZxfUTUBzWL3iGOs6H7r02myQr0DrH3mXKgW7xXepdmO/+KBDmWQxjgqbuOqD8WY/9o1YWZB5gimDo0YJ8xNUxtoFxKThgqOr0KbXLm6VcfG+p2WaZmmOUp35pGtLENA6tmq+RB3QIeqA9s9eo5fQKyTTs3DXa391UlZujz8Nl/0VGRn2IKTNOebrNq9kklueBk6JV3bFFDZyeU2oe5QapYqxayJ2aiW0WPqV2gSgbVP3jr1R7dpFdhyLpNNt+tfDUDR1+V3SQY7YD/+9XMcfHg9tgiRhMTV98CPfbOWNB729QkKbGJNImQBsKP21vfbHWxGl0MCNPzIqH0f/PQp7pUybcOBXyVOhujgyRp371irJctD6/If7HHnjWic9W6r2tJ5pNcg6Vfg4n1YP0iIpcOEuiJi+S32lyRPZhcim18FZeNRO/09QKMOjhcDRDk98arCqiyptqDgg+VJPMJfPtojuhnpxARMeyk/7pbdpL4nuululdJARfFzodvx+OenwMA/MOJ3aShjtFsATrXhOHPzc682TCbnlM/rLZ8H+jAShhWfmtcwbNIGsbAculdrF+Ro0ftu8mUH4ybhxbgz55g6a9pbZ7kZ4qH3dsuApdpNPFT8QuH3XGHz2VAp9CvblC14qoM5fpTjRuvjDEw3sszm92Jd1z2oSDhGTsuduwYj7YOPK9Uc/y47Abwr35JT8aRz0WkUhlMuOPcuxkOpYuDStmK7K/kJvKCBKnzMBXnlChetQI2fpiZFyQSoomi2umtRHtTtqhqUPI33Pzah8+qOo2Vxqjr2/vCJ938PoshvZj1/tfipMgL8Zqf5AU5nm4dmeFMzxIKG+TNo9/zG7HYVaCrV/3M0br0ebZFxBAHoYbsv9Tim/UqDGUPVPbTOBjNQIxbk/b6Xpx1RO0EL2vO7mOJwoCYf2tZXuwLA8zb7BwM0uQz3RgRww61gxr75aoy86JQ+Avdk1SxtFImJTgqRKK8oNwRcCuJJSSXBp3Z3kEUqrnXGWrD1KJ8U+huVgsv10nncXglhgT9bbcyN3ntoppA8W84lJA6mvlEd6w62PBqTmzNWrXj+MfTZyySe1kL+H4pzsfVQSnVxlRhkK7Se1ZVkfDL/3swE/sPXj6L2Xuyt/Fi9kCKb2xtrFUQpirZo2c8oDNmZVCyvtue93oYkezt6oDKT1Bl4QN/974ZagI16a6mkdJ9ND1WGCEMmoV4hfSS92+P5oy0jUnfLeqKnSRWqMiKAkr7jYlE4dHHTbqHFRd6HqTf/OJRm8PhYtIVhJkuF6Kqg2K8htTefpeb7ZyJMP6sxUanHT8gIEPdA62uGswpJCWB0W3JLJ6ly1b2VxN1rqSMjhCcDYLtw1pSCaNba2TO0GmfLHU+vNLjzKcqv1mtv9eIMY9h2EHvM3SD+rXdnaZBqBm6kHetMF/+LAhGdyVuLir7SmEVzRwoctNYSp2TUmwVOjKslne6kqbNOYcaNXK6R3UA6qmv7cjZw6kL8QULM4opmNOGM/tKpGzJDsim1al+HDqQWnUjXqcoiEVteBGt7lLRmFwm1WxTlMQ5vhxOpIavuN6v7e43OKreaohbWAuimbtOVLtFGEt6wH/VSQrLztmfsTqIKEPzqOTFyhLzXJxcxEoXxMG/9hZemj/7XInoXjkpaAHyIUazn8XYx3FhSDXuQQF8zHyyvp1SjjAFkiQSYdEpGHMkh/rCSnRyrzLAc1Z7/OMQPVPmq2Hmk7PbFi5kwgp0Ky/ArzZlStPnTZ7IiRHq1dfx1E06iyGxD0vU7k2qaersbF1kMsxTufgGWbPnnTvlk9I5L2/iec9i7NO4gLl0WeaTrLC4XKt7lvl0DkLm2LnBVNPugVxNkiSzJrnE5aRicyXxHlaArhQHWgffyfeLdPv8ZmJ1nObwJTaPqv5eju0xGbjVGqsoWXx+0yKwXuC92LawVnKXeV0d6u5asdeCauz+2yZVfyfqD+8E2kUlqZmxdvCkl3MmhO6RksQ9qWldX4veBXcXGapbZajHDDPbnYt6nQX6tZVhHnn2iyV9k5rGVAlT7+IbVPCALmFiHT/AFxM0IqJmdfNVbTNpll+qFdoT7sOpQvlCWDTD+/ylGXIoQOJh3dfdOC9IL73ITfzmHWL4cQ3lizKkJgFqFxwQZz7Rs3jQ6wjjFsXdYfhAv/QaIiPspmSPWvUOywuC9afGpKl+ZxgGDy6/SwVDXau5VJPxFEDveuXIJuGE3Xt3GO6zeca3xRrmzlNK2CuzRYM03yYOfFCTQd+MstqHgwyqW2tzrO6p4XMWG4gK+he/hh8Z0nMonmscqIKgofSOVXESe8Sy7o//kiEgTTQvh17PTJvNxjW80WNkl8rbOe08n0KU+aS+r8MkL8hz/ZXc+D0vCkToHWcvhbfZfr//H6saWXgZLR5h+No+12/JKi/sXstxYdwkobL5c3Oi9EUTSPekxM8p8p+SDAjBJjhqaItfw9H78NhE5/WNZQbS43+3fDex7C3lJZ4o0CKG9mMhDppdGMD1nIN18RrOoTrw9bOUrNP0uRE8Ioqddh5QOaoojlOS/VTXmLAoRE185zszy4an1zaAzcxapNgumqGwVYNJkgjImup5OYKqJJkpeKZv86A4kCZXPUS/ZZxLZkVAIKdM9TpuC6FdPAvagN3mua49QxVPko5IUebTThOpE/5R1c76U+uL5zF0Cm31WhiqzV0lOVN6Zss413xCzWfx24llB4LSQdOetJgE9bC2cdlGDcA6lIR5NXWfDWxm+c2YIaw9N86rYNHMJzDJC5IVp3if1b6O/4raLjqXTt2xWk0WgroGhkb6FZ9khEJnJz1HpxFYnyTp1589PYnBQ+dP5ljoT1BVTky/shRHnsglnwunONA46VoYcvj0zJsI3e/mMWSdL8Vmyz/LfPJh4ZM320azCwIincBKReHhJaBU4JMu4oJrOYecui0n3Vs8WJhX1akJWDUPS85Z5pNu7adHd2g0u9B4I/2zUIhK+i+Dgz16FeJr6cYnqoNysigOLA3m5Hxoaif8Og9Yx6CYYfYh/rSZCUv8IEYjqtxfvRQaDXqHhqNJ1QtkKKwW47iF7Ojy69zskVT3b6ZYNDuRkvX3gTjBUCChRPCFobJvRhCw7n2GYVyLLJWE9G7C0IKgZcaTnToUp+9veIpFbXuq08j8E6xJE+dQ41QkGSyR/Jxg8ghYOE6NMokXzTD6OIl8SCWSBjh6ua0y226qU1Dq9J4lHfSdasV/9oiaOnexYe4IIobIwPt+nDyr+5D160IzMiPC9E7VO8t88jJroXgn3aOjiBiSUG3/nCSx+hW5ZWpkcpdGO6czqJ9dFLIOjj9ch2BfMBKGYjobiw7oV0DxnkQtqPGZR5lP3QOvEkeLgVIqrEYhjjtOMWKIOSl9FL/khzL0/O0GezvF2EjW5zp96MaZT3QF9cwLEgosTHbHKTKonUB4mpGts9zQfLMjTfivsSh1VuOOSOw9Y8BrpZfoNfZqIDSzQD+75kon1MidWMNVlFScKArVsbzCVqguzWvsWRZJ7ojXoRLXW1hZUwgnWueFb04qkQES9S/1j9Qbb4j0+RBZUsy9OgtWRwz90vPJzjjSG7MQ96uhm3nT6v8DXSUl+4ZhEElCzVbNS1JOLPjqIRm32sUPT/Q4PdWBsFq832iQ6S8JuJOgu03DJwAm8Vxft55jHBgoOWeYZT6pg7oXv8rC4j3/2ORuqIHl4qD28sA6i+fK/V5naDSEUfl3S056m0Ed5Nu3OdXPhJDb8ZNdygNYe60SLjTOSkOpAXBYP8sLgp71Mncn324wHxpaLZy5jnS9WmhLKAwiu4GVCQqrBfmseyTwW82LZT7dLYhi+l1SrACgB0unTYIShlxAmqcya5KQtIHYCpfkhTgfESnQobpe9xxq+ik663xUfikFUd8jyhCT52Ue6IosU+7QOZLUi2U+3R3ERqeY29GVipJk3HuFthG/zoFT1WY/eXNcxXPk/h7C02tI7y4iI5FIRq7PQ1epRmw8v29G1q3AkdyTspdIWbeaua/e1cyn2UgY4jcn1qaXJMiw/hw2o0i36VY57mvGO55bOzWNwJj7zqM7iIghJxGjm/I3k64nUN8s7TSZZ4iqOzCRsnLcg/TuW/bjiN2cEmqI7V0fxBLVBxCUD032lu392llPfMtxXuYQ0s6NMd5VCELuMOOM9Oaxtk2BtPO+5yZtIGqvpvQkXyoIdqo0Ut7mlbbNbqrs6Mnb1UDhPSHLY/dOg6Hu7frDNaTq25++Z5XIss/ygnjlyOxwy2NRTINk4JP6kKHu+rW6z95rAKLMp2d7ajCvpmkJIKnYPhy+JKDqQ0+nGxR40AM6qDwXSbiQEp5bBELGwz8rVTgRv/Uy0Euxt6fceQ/pfBicyoXNlDJZ8K1X/PyPsY6z1GChHw43DzxvPERNhc52FHdbcoZxZ1O1nZXHEyl8kH0UqdtLzjByYKMw3T0Y26VyubLViRxw8Tmc3V5pAbh2mlRJtZstZ9OVq1FfOehZJcv/yTZiciQUtfbWvc/B2gXwzdpaeN3vSjYEJDb2UpbHeu7x0UsEZJDdExMvvqiR5ttyOXN5zG1xdwa/1prIdFw4Q3pnaFJvx/I+dkTS5V8bJHlZuoRyx1UvakI7lLTR1zn/1KHrnpuTsQEzW/MKNBcE1v1ITbMeBZAtIfTKKfNjWpAmPs+4G47j+BSsE60/8jX7nxeE5z9Jh9dds0FYdSDiMHn6LGpEANnrOTTprG9FYB6Aih+3VL4cpvUiHoHCYj4w3yTSde9SJlBEjTMIt35U9mCl5DovbIG1JUMhQqK9naEMx6/LTxNJp//znKQoBW5CaH0vCdfOcEiVy/3Wr25WwXdm/DdFRAxxq09PocMvHjKk+m+qSfB1vhJiDCLdkj/l5fL7N7HJJJIAmS25qgPv/AlfGkB3q4U2+vSdUdcNVh7wy7uddGc1Em/EeKyeWLziwkV0sB2HA9zMoRkGxmWKPK8KhKSwY3dRkMhvg7C3bbKK2GtgSO/CVs+QOPUmX2otSpqKiYiSeG9IcqfMtb+QRtKTDP3yQOQ0DS28yvs8DPOwDPLLv05T14bT7cbtuCmHDOllYbMXPlwPcNrudG4lXDCSS4eImmQTXrxK6+KgtxG6FS/QkGHUdTeUrg2i9JkNvxbGUDCYxqhp9D+Xqkq7GAR08zJmKq5jfw4f4l3AF4ZfGN59htdG8bZ5fcEXfMEXfMEXfMEXfMG14f8DC7Xh1JEqRzIAAAAASUVORK5CYII="/>
            <vs-avatar size="70px" src="https://pbs.twimg.com/profile_images/1146427358469120000/fgQqA2VK_400x400.png"/> 
            <vs-avatar size="70px" src="https://pbs.twimg.com/profile_images/899663758662017024/JLvGAjAM_400x400.jpg"/>
            <vs-avatar size="70px" src="https://site.aegee.org/wp-content/uploads/N26.jpg"/> 
            <vs-avatar size="70px" src="https://pbs.twimg.com/profile_images/1059770497590878208/qL4i_SGK_400x400.jpg"/>      
            <vs-avatar size="70px" src="https://cdn.welcometothejungle.co/uploads/organization/logo/3377/155871/boursorama.png"/>  
             <vs-avatar size="70px" src="https://upload.wikimedia.org/wikipedia/fr/thumb/0/08/Logo_La_Banque_postale_2012.svg/1200px-Logo_La_Banque_postale_2012.svg.png"/>
            <vs-avatar size="70px" src="https://i0.wp.com/comment-contacter.fr/wp-content/uploads/2016/04/images_easyblog_articles_332_Logo-institutionnel-e1430487731328.jpg?fit=1136%2C1136"/>
             <br>
        </div><br>
                </tab-content>

                <!-- tab 3 content -->
                <tab-content title="Import de vos transactions" class="mb-5">
                    
<br>
            <h3>
Felicitations ! Vos comptes sont prets. </h3>
Cliquez sur continuer pour acceder a vos transactions bancaires.<br><br>

<br>
                    <center><img src="https://i.ya-webdesign.com/images/png-checkbox-2.png" width="14%" /></center><br>

                               
                </tab-content>
                
     

            </form-wizard>
       
        
        
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;form-wizard color=&quot;rgba(var(--vs-primary), 1)&quot; :title=&quot;null&quot; :subtitle=&quot;null&quot; finishButtonText=&quot;Submit&quot; @on-complete=&quot;formSubmitted&quot;&gt;
      &lt;tab-content title=&quot;Step 1&quot; class=&quot;mb-5&quot;&gt;

          &lt;!-- tab 1 content --&gt;
          &lt;div class=&quot;vx-row&quot;&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-input label=&quot;First Name&quot; v-model=&quot;firstName&quot; class=&quot;w-full&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-input label=&quot;Last Name&quot;  v-model=&quot;lastName&quot; class=&quot;w-full&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-input type=&quot;email&quot; label=&quot;Email&quot;  v-model=&quot;email&quot; class=&quot;w-full&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-select v-model=&quot;city&quot; class=&quot;w-full select-large&quot; label=&quot;City&quot;&gt;
                      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in cityOptions&quot; class=&quot;w-full&quot; /&gt;
                  &lt;/vs-select&gt;
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/tab-content&gt;

      &lt;!-- tab 2 content --&gt;
      &lt;tab-content title=&quot;Step 2&quot; class=&quot;mb-5&quot;&gt;
          &lt;div class=&quot;vx-row&quot;&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-input label=&quot;Proposal Title&quot; v-model=&quot;proposalTitle&quot; class=&quot;w-full mt-4&quot; /&gt;
                  &lt;vs-input label=&quot;Job Title&quot;  v-model=&quot;jobTitle&quot; class=&quot;w-full mt-4&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-textarea v-model=&quot;textarea&quot; label=&quot;Short discription&quot; class=&quot;mb-0 md:mt-10 mt-6&quot; rows=&quot;3&quot; /&gt;
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/tab-content&gt;

      &lt;!-- tab 3 content --&gt;
      &lt;tab-content title=&quot;Step 3&quot; class=&quot;mb-5&quot;&gt;
          &lt;div class=&quot;vx-row&quot;&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-input label=&quot;Event Name&quot; v-model=&quot;eventName&quot; class=&quot;w-full mt-5&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-select v-model=&quot;city&quot; class=&quot;w-full select-large mt-5&quot; label=&quot;Event Location&quot;&gt;
                      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in cityOptions&quot; class=&quot;w-full&quot; /&gt;
                  &lt;/vs-select&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-select v-model=&quot;status&quot; class=&quot;w-full select-large&quot; label=&quot;Event Status&quot;&gt;
                      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in statusOptions&quot; class=&quot;w-full&quot; /&gt;
                  &lt;/vs-select&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full md:mt-8&quot;&gt;
                  &lt;div class=&quot;demo-alignment&quot;&gt;
                      &lt;span&gt;Requirements:&lt;/span&gt;
                      &lt;div class=&quot;flex&quot;&gt;
                        &lt;vs-checkbox&gt;Staffing&lt;/vs-checkbox&gt;
                        &lt;vs-checkbox&gt;Catering&lt;/vs-checkbox&gt;
                      &lt;/div&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/tab-content&gt;
  &lt;/form-wizard&gt;
&lt;/template&gt;

&lt;script&gt;
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  data() {
    return {
      firstName: &quot;&quot;,
      lastName: &quot;&quot;,
      email: &quot;&quot;,
      city: &quot;boursorama&quot;,
      proposalTitle: &quot;&quot;,
      jobTitle: &quot;&quot;,
      textarea: &quot;&quot;,
      eventName: &quot;&quot;,
      eventLocation: &quot;san-francisco&quot;,
      status: &quot;plannning&quot;,
      cityOptions: [
        {text: &quot;Boursorama&quot;, value:&quot;boursorama&quot;},
        {text: &quot;LCL&quot;, value:&quot;chicago&quot;},
        {text: &quot;BNP&quot;, value:&quot;san-francisco&quot;},
        {text: &quot;Societe Generale&quot;, value:&quot;boston&quot;},
      ],
      statusOptions: [
        {text: &quot;Plannning&quot;, value:&quot;plannning&quot;},
        {text: &quot;In Progress&quot;, value:&quot;in progress&quot;},
        {text: &quot;Finished&quot;, value:&quot;finished&quot;},
      ],
      LocationOptions: [
        {text: &quot;Boursorama&quot;, value:&quot;new-york&quot;},
        {text: &quot;LCL&quot;, value:&quot;chicago&quot;},
        {text: &quot;Societe Generale&quot;, value:&quot;san-francisco&quot;},
        {text: &quot;BNP&quot;, value:&quot;boston&quot;},
      ],
    }
  },
  methods: {
    formSubmitted() {
      alert(&quot;Form submitted!&quot;);
    }
  },
  components: {
    FormWizard,
    TabContent
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            city: "boursorama",
            proposalTitle: "",
            jobTitle: "",
            textarea: "",
            eventName: "",
            eventLocation: "san-francisco",
            status: "plannning",
            cityOptions: [
                {text: "Boursorama", value:"boursorama"},
                {text: "LCL", value:"chicago"},
                {text: "Societe Generale", value:"san-francisco"},
                {text: "BNP Paribas", value:"boston"},
            ],
            statusOptions: [
                {text: "Plannning", value:"plannning"},
                {text: "In Progress", value:"in progress"},
                {text: "Finished", value:"finished"},
            ],
            LocationOptions: [
                {text: "New York", value:"new-york"},
                {text: "Chicago", value:"chicago"},
                {text: "San Francisco", value:"san-francisco"},
                {text: "Boston", value:"boston"},
            ],
        }
    },
    methods: {
        formSubmitted() {
            alert("Form submitted!");
        }
    },
    components: {
        FormWizard,
        TabContent
    }
}
</script>
