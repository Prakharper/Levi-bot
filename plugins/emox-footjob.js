//Codígo creado por Destroy wa.me/584120346669

import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
if (!db.data.chats[m.chat].nsfw && m.isGroup) return m.reply('🚩 *¡Estos comandos están desactivados!*');
    // Verificamos si se menciona a alguien o se cita un mensaje
    if (m.mentionedJid.length > 0) {
        who = m.mentionedJid[0]; // Si hay mención, usamos esa
    } else if (m.quoted) {
        who = m.quoted.sender; // Si se cita un mensaje, usamos el emisor de ese mensaje
    } else {
        who = m.sender; // En caso contrario, usamos el emisor
    }

    let name = conn.getName(who); // Nombre de la persona mencionada o del emisor
    let name2 = conn.getName(m.sender); // Nombre del usuario que envía el comando
    m.react('🥵');

    // Construimos el mensaje dependiendo de si hay una mención o no
    let str;
    if (m.mentionedJid.length > 0) {
        str = `${name2} le hizo una paja con los pies a ${name || who}.`; // Usamos nombre agendado o número si no está agendado
    } else if (m.quoted) {
        str = `${name2} le hizo una paja con los pies a ${name || who}.`; // Mensaje cuando se cita a otro usuario
    } else {
        str = `${name2} está haciendo una paja con los pies!`.trim();
    }
    
    if (m.isGroup) {
        let pp = 'https://qu.ax/aTGxj.mp4'; 
        let pp2 = 'https://qu.ax/SCxhs.mp4'; 
        let pp3 = 'https://qu.ax/ASKQT.mp4';
        let pp4 = 'https://qu.ax/UQzPO.mp4';
        let pp5 = 'https://qu.ax/yexqZ.mp4';
        let pp6 = 'https://qu.ax/Agxmr.mp4';
        let pp7 = 'https://qu.ax/dvgDr.mp4';
        
        const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7];
        const video = videos[Math.floor(Math.random() * videos.length)];
        
        // Enviamos el mensaje con el video y el mensaje correspondiente
        let mentions = [who]; // Mencionamos al usuario que se ha citado o mencionado
        conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption: str, mentions }, { quoted: m });
    }
}

handler.help = ['footjob/pies @tag'];
handler.tags = ['nsfws'];
handler.command = ['footjob','pies'];
handler.group = true;

export default handler;