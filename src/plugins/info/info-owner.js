/**
 * @file Owner/creator information command handler
 * @module plugins/info/owner
 * @license Apache-2.0
 * @author Naruya Izumi
 */

/**
 * Displays owner/creator contact information as a vCard
 * @async
 * @function handler
 * @param {Object} m - Message object
 * @param {Object} sock - Connection object
 * @returns {Promise<void>}
 *
 * @description
 * Command to display the bot owner's contact information in vCard format.
 * Includes personal details, contact information, and social media links.
 *
 * @features
 * - Displays owner contact information as vCard
 * - Includes WhatsApp business profile details
 * - Shows social media links (Instagram)
 * - Contact address and business hours
 * - External advertisement integration
 * - Quoted message with forwarding context
 */

let handler = async (m, { sock }) => {
    const v = `BEGIN:VCARD
VERSION:3.0
N:;Naruya;;;
FN:Naruya
X-WA-BIZ-NAME:mkfs.ext4 /dev/xeonradeon
X-WA-BIZ-DESCRIPTION:𝐎𝐰𝐧𝐞𝐫 𝐗 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩
TEL;waid=6285943315159
END:VCARD`;

const q = {
        key: {
            fromMe: false,
            participant: "74428142620717@lid",
            remoteJid: "status@broadcast",
        },
        message: {
            interactiveMessage: {
                nativeFlowMessage: {
                    buttons: {
                        0: {
                            name: "payment_info",
                            buttonParamsJson: JSON.stringify({
                                currency: "IDR",
                                total_amount: {
                                    value: 999999999999999,
                                    offset: 0,
                                },
                                reference_id: "xeonradeon",
                                type: "physical-goods",
                                order: {
                                    status: "pending",
                                    subtotal: {
                                        value: 999999999999999,
                                        offset: 0,
                                    },
                                    order_type: "ORDER",
                                    items: [
                                        {
                                            name: "xeonradeon",
                                            amount: {
                                                value: 999999999999999,
                                                offset: 0,
                                            },
                                            quantity: 1,
                                            sale_amount: {
                                                value: 999999999999999,
                                                offset: 0,
                                            },
                                        },
                                    ],
                                },
                                payment_settings: [
                                    {
                                        type: "pix_static_code",
                                        pix_static_code: {
                                            merchant_name: "xeonradeon",
                                            key: "mkfs.ext4 /dev/xeonradeon",
                                            key_type: "EVP",
                                        },
                                    },
                                ],
                                share_payment_status: false,
                            }),
                        },
                        length: 1,
                    },
                },
            },
        },
        participant: "74428142620717@lid",
    };

    await sock.sendMessage(
        m.chat,
        {
            contacts: {
                displayName: "『 𓅯 』𝙭͢𝙚𝙤𝙣 - 𝙧͢𝙖𝙙𝙚𝙤𝙣",
                contacts: [{ vcard: v }],
            },
            contextInfo: {
                externalAdReply: {
                    title: "© 2024–2026 X Whatsapp",
                    body: "Contact via WhatsApp",
                    mediaType: 1,
                    thumbnailUrl: "https://files.catbox.moe/mojb5s.jpg",
                    renderLargerThumbnail: true,

                    showAdAttribution: true,
                    sourceUrl: "https://wa.me/6285943315159",
                },
            },
        },
        { quoted: q }
    );
};

/**
 * Command metadata for help system
 * @property {Array<string>} help - Help text
 * @property {Array<string>} tags - Command categories
 * @property {RegExp} command - Command pattern matching
 */
handler.help = ["owner"];
handler.tags = ["info"];
handler.command = /^(owner|creator)$/i;

export default handler;
