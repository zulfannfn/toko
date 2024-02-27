<?php

namespace App\Http\Controllers;

use App\Models\Penjualan;
use App\Models\Pelanggan;
use App\Models\produk;
use Illuminate\Http\Request;
use Inertia\Inertia;


class PenjualanAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $penjualan = Penjualan::all();
        return inertia::render('Admin/Penjualan', [
            'penjualan' => $penjualan,
            'assetUrl' => asset(''),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $penjualan = new Penjualan();
        $penjualan->id_penjualan = $request->idPenjualan;
        $penjualan->id_pelanggan = $request->idPelanggan;
        $penjualan->produk_id = $request->idProduk;
        $penjualan->jumlah = $request->jumlahProduk;
        $penjualan->tanggal_penjualan = $request->tanggalPenjualan;
        $penjualan->total_harga = $request->totalHarga;
        $penjualan->save();
        return redirect()->back()->with('message', 'Berhasil Di Masukan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Penjualan $penjualan)
    {
        $pelanggan = Pelanggan::all();
        $penjualan = Penjualan::all();
        $produk = produk::all();
        return inertia::render('Admin/Penjualan', [
            'penjualan' => $penjualan,
            'pelanggan' => $pelanggan,
            'produk' => $produk,
            'assetUrl' => asset(''),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Penjualan $produk)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Penjualan $produk)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Penjualan $produk)
    {
        //
    }
}